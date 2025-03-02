import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Goal } from '../../interfaces/goal';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/apiResponse';
import { CreateGoalModalComponent } from '../../components/create-goal-modal/create-goal-modal.component';
import moment from 'moment';
import { LoadingService } from '../../services/loading.service';
import { EditGoalInput } from '../../interfaces/editGoalInput';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  public goals: Goal[] = [];
  public detailedGoal: Goal = {
    id: 0,
    name: '',
    description: '',
    targetAmount: 0,
    currentAmount: 0,
    date: new Date(),
    recommendedInvestmentPerMonth: 0,
    contributions: [],
  };
  public createGoalModalErrorMessage = '';

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private loadingService: LoadingService
  ) {}

  async getGoals() {
    try {
      const response = await this.apiService.get<Goal[]>(
        'Goal/GetGoalsByUserCode'
      );

      this.goals = response.data.map((goal) => ({
        ...goal,
        date: moment(goal.date).toDate(),
        contributions:
          goal.contributions?.map((contribution) => ({
            ...contribution,
            date: moment(contribution.date).toDate(),
          })) || [],
      }));
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  }

  async deleteGoal(goalId: number) {
    try {
      this.loadingService.show();
      await this.apiService.delete(`Goal/RemoveGoal/?GoalId=${goalId}`);
      await this.getGoals();
      this.loadingService.hide();
    } catch (error) {
      console.error('Error deleting goal:', error);
    } finally {
    }
  }

  async createGoal(goal: Goal) {
    try {
      this.loadingService.show();
      await this.apiService.post('Goal/CreateGoal', goal);
      await this.getGoals();
      this.dialog.closeAll();
      this.loadingService.hide();
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        let apiError = error.error as ApiResponse<any>;
        console.error('Error creating goal:', apiError);
        if (apiError.message != null) {
          this.createGoalModalErrorMessage = apiError.message;
        } else {
          this.createGoalModalErrorMessage =
            'An error occurred while creating the goal';
        }
        return;
      }
      console.error('Error creating goal:', error);
      this.createGoalModalErrorMessage =
        'An error occurred while creating the goal';
    } finally {
    }
  }

  async getDetailedGoalById(goalId: number) {
    this.loadingService.show();
    try {
      let detailedGoal = (
        await this.apiService.get<Goal>(`Goal/GetGoalById/${goalId}`)
      ).data;

      detailedGoal = {
        ...detailedGoal,
        date: moment(detailedGoal.date).toDate(),
        contributions:
          detailedGoal.contributions?.map((contribution) => ({
            ...contribution,
            date: moment(contribution.date).toDate(),
          })) || [],
      };
      this.detailedGoal = detailedGoal;
      return;
    } catch (error) {
      console.error('Error fetching detailed goal:', error);
      throw error;
    } finally {
      this.loadingService.hide();
    }
  }

  async editGoal(editGoalInput: EditGoalInput) {
    this.loadingService.show();
    await this.apiService.put('Goal/EditGoalById', editGoalInput);
    this.loadingService.hide();
  }

  openCreateGoalModal() {
    this.createGoalModalErrorMessage = '';
    this.dialog.open(CreateGoalModalComponent, {
      width: '400px',
    });
  }

  closeCreateGoalModal() {
    this.dialog.closeAll();
  }
}
