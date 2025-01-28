import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { GoalsAccordionComponent } from '../components/goals-accordion/goals-accordion.component';
import { MascotStatusComponent } from '../components/mascot-status/mascot-status.component';
import { DashboardPageComponent } from '../pages/dashboard/dashboard-page.component';
import { MonthlyContributionGridComponent } from '../components/monthly-contribution-grid/monthly-contribution-grid.component';
import { CreateGoalModalComponent } from '../components/create-goal-modal/create-goal-modal.component';
import { LoginCardComponent } from '../components/login-card/login-card.component';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { ResetPasswordFormComponent } from '../components/reset-password-form/reset-password-form.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { ResetPasswordPageComponent } from '../pages/reset-password/reset-password-page.component';
import { CreateUserPageComponent } from '../pages/create-user/create-user-page.component';
import { GoalDetailedPageComponent } from '../pages/goal-detailed-page/goal-detailed-page.component';
import { ConfirmActionDialogComponent } from '../components/confirm-action-dialog/confirm-action-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    GoalsAccordionComponent,
    MascotStatusComponent,
    DashboardPageComponent,
    MonthlyContributionGridComponent,
    CreateGoalModalComponent,
    LoginCardComponent,
    LoginCardComponent,
    ResetPasswordFormComponent,
    LoadingComponent,
    ResetPasswordFormComponent,
    CreateUserPageComponent,
    GoalDetailedPageComponent,
    ConfirmActionDialogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PairProgress';

  public test(): void {
    console.log('test');
  }
}
