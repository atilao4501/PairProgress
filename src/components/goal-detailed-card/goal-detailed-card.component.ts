import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Goal } from '../../interfaces/goal';
import { ConfirmActionService } from '../../services/confirmAction.service';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { GoalService } from '../../app/services/goal.service';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import { EditGoalInput } from '../../interfaces/editGoalInput';

@Component({
  selector: 'app-goal-detailed-card',
  standalone: true,
  imports: [FormsModule, ConfirmActionDialogComponent],
  templateUrl: './goal-detailed-card.component.html',
  styleUrl: './goal-detailed-card.component.css',
})
export class GoalDetailedCardComponent implements OnInit {
  public readonly goalId: number = 0;

  constructor(
    public confirmActionService: ConfirmActionService,
    public goalService: GoalService,
    private route: ActivatedRoute
  ) {
    this.goalId = Number.parseInt(
      this.route.snapshot.paramMap.get('id')?.toString() || '0'
    );
  }

  public detailedGoalDateAsString: string = '';

  async ngOnInit() {
    this.detailedGoalDateAsString = moment(
      this.goalService.detailedGoal?.date
    ).format('YYYY-MM-DD');
  }

  public onSubmit(formValues: EditGoalInput) {
    formValues.id = this.goalId;
    console.log(formValues);

    this.confirmActionService.show(
      'Save your changes?',
      'Are you sure you want to submit the form?',
      () =>
        this.goalService.editGoal(formValues as EditGoalInput).then(() => {
          this.confirmActionService.hide();
        })
    );
  }

  public test() {
    console.log('Test');
  }

  public minDate = new Date();
}
