import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { Goal } from '../../interfaces/goal';
import { CreateGoalModalComponent } from '../create-goal-modal/create-goal-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-goals-accordion',
  standalone: true,
  imports: [MatExpansionModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './goals-accordion.component.html',
  styleUrls: ['./goals-accordion.component.css'],
})
export class GoalsAccordionComponent {
  public goals: Goal[] = [
    {
      id: 1,
      name: 'Aprender Angular',
      description:
        'Aprender a usar o Angular para criar aplicações web modernas.',
      targetAmount: 1000,
      currentAmount: 200,
      date: new Date('2023-01-01'),
      recommendedInvestmentPerMonth: 100,
    },
    {
      id: 2,
      name: 'Usar Angular Material',
      description:
        'Aprender a usar o Angular Material para criar aplicações web com design material.',
      targetAmount: 500,
      currentAmount: 150,
      date: new Date('2023-02-01'),
      recommendedInvestmentPerMonth: 50,
    },
    {
      id: 3,
      name: 'Criar um projeto incrível',
      description:
        'Criar um projeto incrível que demonstre meus conhecimentos em Angular.',
      targetAmount: 2000,
      currentAmount: 800,
      date: new Date('2023-03-01'),
      recommendedInvestmentPerMonth: 200,
    },
  ];

  constructor(private dialog: MatDialog) {}

  openModal() {
    this.dialog.open(CreateGoalModalComponent, {
      width: '400px',
    });
    console.log('openModal');
  }
}
