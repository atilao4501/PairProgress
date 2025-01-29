import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Goal } from '../../interfaces/goal';
import { ConfirmActionService } from '../../services/confirmAction.service';
import { ConfirmActionDialogComponent } from "../confirm-action-dialog/confirm-action-dialog.component";

@Component({
  selector: 'app-goal-detailed-card',
  standalone: true,
  imports: [FormsModule, ConfirmActionDialogComponent],
  templateUrl: './goal-detailed-card.component.html',
  styleUrl: './goal-detailed-card.component.css',
})
export class GoalDetailedCardComponent {
  public goal: Goal = {
    id: 1,
    name: 'Learn Angular',
    description: 'Complete the Angular tutorial and build a project',
    currentAmount: 0,
    targetAmount: 100,
    date: new Date('2021-12-31'),
    recommendedInvestmentPerMonth: 10,
  };

  constructor(public confirmActionService: ConfirmActionService) {}

  public onSubmit() {
    this.confirmActionService.show(
      'Action',
      'Are you sure you want to submit the form?',
      this.test
    );
    console.log('Form submitted');
  }

  public test() {
    console.log('Test');
  }

  public minDate = new Date();
}
