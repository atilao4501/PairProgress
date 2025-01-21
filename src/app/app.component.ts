import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { GoalsAccordionComponent } from "../components/goals-accordion/goals-accordion.component";
import { MascotStatusComponent } from "../components/mascot-status/mascot-status.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { MonthlyContributionGridComponent } from "../components/monthly-contribution-grid/monthly-contribution-grid.component";
import { CreateGoalModalComponent } from "../components/create-goal-modal/create-goal-modal.component";
import { LoginCardComponent } from "../components/login-card/login-card.component";
import { LoginComponent } from "../pages/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GoalsAccordionComponent, MascotStatusComponent, DashboardComponent, MonthlyContributionGridComponent, CreateGoalModalComponent, LoginCardComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PairProgress';
}
