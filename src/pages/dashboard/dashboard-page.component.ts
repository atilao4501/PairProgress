import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { GoalsAccordionComponent } from '../../components/goals-accordion/goals-accordion.component';
import { MascotStatusComponent } from '../../components/mascot-status/mascot-status.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MonthlyContributionGridComponent } from '../../components/monthly-contribution-grid/monthly-contribution-grid.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { LoadingService } from '../../services/loading.service';
import { GoalService } from '../../app/services/goal.service';
import { UserService } from '../../app/services/user.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    HeaderComponent,
    GoalsAccordionComponent,
    MascotStatusComponent,
    MonthlyContributionGridComponent,
    LoadingComponent,
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private loadingService: LoadingService,
    public goalService: GoalService,
    public userService: UserService
  ) {}
  async ngOnInit() {
    this.loadingService.show();
    try {
      await this.goalService.getGoals();
    } catch (error) {
      this.loadingService.hide();
    }
    this.loadingService.hide();
  }
}
