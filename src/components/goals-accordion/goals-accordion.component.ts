import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { Goal } from '../../interfaces/goal';
import { CreateGoalModalComponent } from '../create-goal-modal/create-goal-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'app-goals-accordion',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './goals-accordion.component.html',
  styleUrls: ['./goals-accordion.component.css'],
})
export class GoalsAccordionComponent implements OnInit {
  public goals: Goal[] = [];

  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    await this.getGoals();
  }

  async getGoals() {
    try {
      this.loadingService.show();
      this.goals = await (
        await this.apiService.get<Goal[]>('Goal/GetGoalsByUserCode')
      ).data;
      console.log(this.goals);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      this.loadingService.hide();
    }
  }

  async deleteGoal(goalId: number) {
    try {
      this.loadingService.show();
      await this.apiService.delete(`Goal/RemoveGoal/?GoalId=${goalId}`);
      await this.getGoals();
    } catch (error) {
      console.error('Error deleting goal:', error);
    } finally {
      this.loadingService.hide();
    }
  }

  createGoal(goal: Goal) {
    console.log('createGoal');
  }

  openModal() {
    this.dialog.open(CreateGoalModalComponent, {
      width: '400px',
    });
    console.log('openModal');
  }
}
