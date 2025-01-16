import { Component } from '@angular/core';
import {
  GoalContribution,
  MonthlyContribution,
} from '../../interfaces/monthlyContribution';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monthly-contribution-grid',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './monthly-contribution-grid.component.html',
  styleUrl: './monthly-contribution-grid.component.css',
})
export class MonthlyContributionGridComponent {
  public goalContributions: GoalContribution[] = [
    {
      goalId: 1,
      goalName: 'Aprender Angular',
      contributions: [
        { month: 'Jan', monthNumber: 1, year: 2022, contributed: true },
        { month: 'Fev', monthNumber: 2, year: 2022, contributed: false },
        { month: 'Mar', monthNumber: 3, year: 2022, contributed: true },
        { month: 'Abr', monthNumber: 4, year: 2022, contributed: true },
        { month: 'Mai', monthNumber: 5, year: 2022, contributed: false },
        { month: 'Jun', monthNumber: 6, year: 2022, contributed: true },
        { month: 'Jul', monthNumber: 7, year: 2022, contributed: false },
        { month: 'Ago', monthNumber: 8, year: 2022, contributed: true },
        { month: 'Set', monthNumber: 9, year: 2022, contributed: false },
        { month: 'Out', monthNumber: 10, year: 2022, contributed: true },
        { month: 'Nov', monthNumber: 11, year: 2022, contributed: false },
        { month: 'Dez', monthNumber: 12, year: 2022, contributed: true },
      ],
    },
    {
      goalId: 2,
      goalName: 'Usar Angular Material',
      contributions: [
        { month: 'Jan', monthNumber: 1, year: 2022, contributed: false },
        { month: 'Fev', monthNumber: 2, year: 2022, contributed: true },
        { month: 'Mar', monthNumber: 3, year: 2022, contributed: false },
        { month: 'Abr', monthNumber: 4, year: 2022, contributed: true },
        { month: 'Mai', monthNumber: 5, year: 2022, contributed: false },
        { month: 'Jun', monthNumber: 6, year: 2022, contributed: true },
        { month: 'Jul', monthNumber: 7, year: 2022, contributed: false },
        { month: 'Ago', monthNumber: 8, year: 2022, contributed: true },
        { month: 'Set', monthNumber: 9, year: 2022, contributed: false },
        { month: 'Out', monthNumber: 10, year: 2022, contributed: true },
        { month: 'Nov', monthNumber: 11, year: 2022, contributed: false },
        { month: 'Dez', monthNumber: 12, year: 2022, contributed: true },
      ],
    },
    {
      goalId: 3,
      goalName: 'Criar um projeto incr vel',
      contributions: [
        { month: 'Jan', monthNumber: 1, year: 2022, contributed: true },
        { month: 'Fev', monthNumber: 2, year: 2022, contributed: false },
        { month: 'Mar', monthNumber: 3, year: 2022, contributed: true },
        { month: 'Abr', monthNumber: 4, year: 2022, contributed: false },
        { month: 'Mai', monthNumber: 5, year: 2022, contributed: true },
        { month: 'Jun', monthNumber: 6, year: 2022, contributed: false },
        { month: 'Jul', monthNumber: 7, year: 2022, contributed: true },
        { month: 'Ago', monthNumber: 8, year: 2022, contributed: false },
        { month: 'Set', monthNumber: 9, year: 2022, contributed: true },
        { month: 'Out', monthNumber: 10, year: 2022, contributed: false },
        { month: 'Nov', monthNumber: 11, year: 2022, contributed: true },
        { month: 'Dez', monthNumber: 12, year: 2022, contributed: false },
      ],
    },
  ];

  public months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
}
