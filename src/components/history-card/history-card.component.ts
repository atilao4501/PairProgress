import { Component } from '@angular/core';
import { Contribution } from '../../interfaces/contribution';
import { HistoryOfContributionsPerGoal } from '../../interfaces/historyOfContributionsPerGoal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css',
})
export class HistoryCardComponent {
  public exampleContribution: Contribution = {
    goalId: 1,
    amount: 100,
    date: new Date(),
    contributorName: 'John Doe',
  };

  public historyOfContributions: HistoryOfContributionsPerGoal = {
    goalId: 1,
    goalName: 'teste',
    contributions: [this.exampleContribution],
  };
}
