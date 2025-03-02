import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGoal } from '../../interfaces/newGoal';
import { CommonModule, NgFor } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../app/services/api.service';
import { LoadingComponent } from '../loading/loading.component';
import { GoalService } from '../../app/services/goal.service';

@Component({
  selector: 'app-create-goal-modal',
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    NgFor,
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: './create-goal-modal.component.html',
  styleUrls: ['./create-goal-modal.component.css'],
})
export class CreateGoalModalComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  fields: { key: string; type: string }[] = [];
  formControls: { [key: string]: FormControl } = {};

  constructor(
    private loadingService: LoadingService,
    private apiService: ApiService,
    public goalService: GoalService
  ) {}

  ngOnInit(): void {
    const exampleGoal: NewGoal = {
      name: '',
      description: '',
      targetAmount: 0,
      currentAmount: 0,
      date: new Date(),
      recommendedInvestmentPerMonth: 0,
    };

    this.fields = Object.keys(exampleGoal).map((key) => ({
      key: key as keyof NewGoal,
      type: this.getFieldType(exampleGoal[key as keyof NewGoal]),
    }));

    this.fields.forEach((field) => {
      this.formControls[field.key] = new FormControl(null);
    });

    this.formGroup = new FormGroup(this.formControls);
    console.log(this.fields);
  }

  private getFieldType(value: any): string {
    if (typeof value === 'string') return 'text';
    if (typeof value === 'number') return 'number';
    if (value instanceof Date) return 'date';
    return 'text';
  }

  async onSubmit() {
    if (this.formGroup.valid) {
      let formData = { ...this.formGroup.value };

      formData.date = new Date(formData.date).toISOString();
      this.goalService.createGoal(formData);
    }
  }
}
