import { Component, Input, OnInit } from '@angular/core';
import { Contribution } from '../../interfaces/contribution';
import { HistoryOfContributionsPerGoal } from '../../interfaces/historyOfContributionsPerGoal';
import { CommonModule } from '@angular/common';
import { ContributionService } from '../../app/services/contribution.service';
import { GoalService } from '../../app/services/goal.service';
import { Goal } from '../../interfaces/goal';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css',
})
export class HistoryCardComponent implements OnInit {
  constructor(
    private contributionService: ContributionService,
    public goalService: GoalService,
    private loadingService: LoadingService
  ) {}
  ngOnInit() {}

  async deleteContribution(contributionId: number) {
    try {
      this.loadingService.show();
      await this.contributionService.deleteContributionById(contributionId);
      await this.goalService.getDetailedGoalById(
        this.goalService.detailedGoal.id
      );
      this.loadingService.hide();
    } catch (error) {}
  }
}
