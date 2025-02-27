import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { Goal } from '../../interfaces/goal';
import { CreateGoalModalComponent } from '../create-goal-modal/create-goal-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from '../../services/loading.service';
import { ApiService } from '../../app/services/api.service';
import { GoalService } from '../../app/services/goal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-goals-accordion',
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './goals-accordion.component.html',
  styleUrls: ['./goals-accordion.component.css'],
})
export class GoalsAccordionComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private loadingService: LoadingService,
    private apiService: ApiService,
    public goalService: GoalService
  ) {}

  async ngOnInit() {}
}
