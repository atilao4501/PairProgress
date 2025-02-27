import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { NewContribution } from '../../interfaces/newContribution';
import { Contribution } from '../../interfaces/contribution';
import { HistoryOfContributionsPerGoal } from '../../interfaces/historyOfContributionsPerGoal';

@Injectable({
  providedIn: 'root',
})
export class ContributionService {
  constructor(private apiService: ApiService) {}

  async createContribution(newContribution: NewContribution) {
    try {
      await this.apiService.post(
        'Contribution/AddContribution',
        newContribution
      );
    } catch (error) {
      throw error;
    }
  }

  async getContributionsByGoalId(goalId: number): Promise<Contribution[]> {
    try {
      const response = await this.apiService.get<Contribution[]>(
        `Contribution/GetContributionsByGoal/${goalId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching contributions:', error);
      throw error;
    }
  }

  async deleteContributionById(contributionId: number) {
    try {
      await this.apiService.delete(
        `Contribution/DeleteContribution/?contributionId=${contributionId}`
      );
    } catch (error) {
      throw error;
    }
  }
}
