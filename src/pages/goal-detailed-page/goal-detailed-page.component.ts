import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GoalDetailedCardComponent } from '../../components/goal-detailed-card/goal-detailed-card.component';
import { HistoryCardComponent } from '../../components/history-card/history-card.component';
import { NewContributionCardComponent } from '../../components/new-contribution-card/new-contribution-card.component';
import { Goal } from '../../interfaces/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../../app/services/goal.service';

@Component({
  selector: 'app-goal-detailed-page',
  standalone: true,
  imports: [
    HeaderComponent,
    GoalDetailedCardComponent,
    HistoryCardComponent,
    NewContributionCardComponent,
  ],
  templateUrl: './goal-detailed-page.component.html',
  styleUrl: './goal-detailed-page.component.css',
})
export class GoalDetailedPageComponent implements OnInit {
  constructor(
    private goalService: GoalService,
    private route: ActivatedRoute
  ) {}

  public goal!: Goal;

  async ngOnInit() {
    const goalId = this.route.snapshot.paramMap.get('id');
    if (goalId) {
      await this.goalService.getDetailedGoalById(Number.parseInt(goalId));
    }
  }
}
