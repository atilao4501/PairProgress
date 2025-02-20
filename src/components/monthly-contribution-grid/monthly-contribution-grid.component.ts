import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HistoryOfContributionsPerGoal } from '../../interfaces/historyOfContributionsPerGoal';
import { Contribution } from '../../interfaces/contribution';

@Component({
  selector: 'app-monthly-contribution-grid',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './monthly-contribution-grid.component.html',
  styleUrl: './monthly-contribution-grid.component.css',
})
export class MonthlyContributionGridComponent {
  public historyOfContributionsPerGoal: HistoryOfContributionsPerGoal[] = [
    {
      goalId: 1,
      goalName: 'Goal 1',
      contributions: [
        {
          goalId: 1,
          amount: 100,
          date: new Date(2022, 0, 15),
          contributorName: 'Alice',
        },
        {
          goalId: 1,
          amount: 150,
          date: new Date(2022, 1, 20),
          contributorName: 'Bob',
        },
        {
          goalId: 1,
          amount: 400,
          date: new Date(2022, 6, 20),
          contributorName: 'Grace',
        },
        {
          goalId: 1,
          amount: 550,
          date: new Date(2022, 9, 25),
          contributorName: 'Judy',
        },
      ],
    },
    {
      goalId: 2,
      goalName: 'Goal 2',
      contributions: [
        {
          goalId: 2,
          amount: 200,
          date: new Date(2022, 2, 10),
          contributorName: 'Charlie',
        },
        {
          goalId: 2,
          amount: 250,
          date: new Date(2022, 3, 25),
          contributorName: 'Dave',
        },
        {
          goalId: 2,
          amount: 450,
          date: new Date(2022, 7, 30),
          contributorName: 'Heidi',
        },
        {
          goalId: 2,
          amount: 600,
          date: new Date(2022, 10, 5),
          contributorName: 'Mallory',
        },
      ],
    },
    {
      goalId: 3,
      goalName: 'Goal 3',
      contributions: [
        {
          goalId: 3,
          amount: 300,
          date: new Date(2022, 4, 5),
          contributorName: 'Eve',
        },
        {
          goalId: 3,
          amount: 350,
          date: new Date(2022, 5, 15),
          contributorName: 'Frank',
        },
        {
          goalId: 3,
          amount: 500,
          date: new Date(2022, 8, 10),
          contributorName: 'Ivan',
        },
        {
          goalId: 3,
          amount: 650,
          date: new Date(2022, 11, 15),
          contributorName: 'Niaj',
        },
      ],
    },
  ];

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
      (contribution) => contribution.date.getMonth() == this.months[month]
    );
  }
}
