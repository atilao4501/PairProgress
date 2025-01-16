import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { GoalsAccordionComponent } from "../../components/goals-accordion/goals-accordion.component";
import { MascotStatusComponent } from "../../components/mascot-status/mascot-status.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MonthlyContributionGridComponent } from "../../components/monthly-contribution-grid/monthly-contribution-grid.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, GoalsAccordionComponent, MascotStatusComponent, FooterComponent, MonthlyContributionGridComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
