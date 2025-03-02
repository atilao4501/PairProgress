import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContributionService } from '../../app/services/contribution.service';
import { GoalService } from '../../app/services/goal.service';
import { NewContribution } from '../../interfaces/newContribution';
import { LoadingService } from '../../services/loading.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-new-contribution-card',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './new-contribution-card.component.html',
  styleUrl: './new-contribution-card.component.css',
})
export class NewContributionCardComponent {
  public goalId: number = 0;
  public amount?: number;
  public date: Date = new Date();
  public successMessage: string = '';
  public newContributionErrorMessage: string = '';

  constructor(
    public contributionService: ContributionService,
    private goalService: GoalService,
    private loadingService: LoadingService
  ) {}

  public async submitContribution(contributionAmount: number) {
    this.loadingService.show();
    const newContribution: NewContribution = {
      goalId: this.goalService.detailedGoal?.id || 0,
      amount: contributionAmount.valueOf(),
      date: this.date,
    };

    try {
      await this.contributionService.createContribution(newContribution);
      await this.goalService.getDetailedGoalById(
        this.goalService.detailedGoal.id
      );
      this.successMessage = 'Contribution successfully added!';
      this.loadingService.hide();
      setTimeout(() => {
        this.successMessage = '';
      }, 5000);
    } catch (error: any) {
      this.newContributionErrorMessage = error.error.message;
    }
  }
}
