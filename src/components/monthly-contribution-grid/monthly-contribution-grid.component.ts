import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HistoryOfContributionsPerGoal } from '../../interfaces/historyOfContributionsPerGoal';
import { Contribution } from '../../interfaces/contribution';
import { GoalService } from '../../app/services/goal.service';
import moment from 'moment';

@Component({
  selector: 'app-monthly-contribution-grid',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './monthly-contribution-grid.component.html',
  styleUrl: './monthly-contribution-grid.component.css',
})
export class MonthlyContributionGridComponent {
  constructor(public goalService: GoalService) {}

  public months: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  public monthsKeys = Object.keys(this.months);

  public getContributionForMonth(
    contributions: Contribution[],
    month: string
  ): boolean {
    return contributions.some(
      (contribution) =>
        contribution.date.getMonth() == this.months[month] &&
        contribution.date.getFullYear() == moment().year()
    );
  }
}
