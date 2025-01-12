import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { Goal } from '../../interfaces/goal';
import { MatIconModule } from '@angular/material/icon';

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
        'Aprender a usar o Angular para criar aplica es web modernas.',
    },
    {
      id: 2,
      name: 'Usar Angular Material',
      description:
        'Aprender a usar o Angular Material para criar aplica es web com design material.',
    },
    {
      id: 3,
      name: 'Criar um projeto incr vel',
      description:
        'Criar um projeto incr vel que demonstre meus conhecimentos em Angular.',
    },
  ];
}
