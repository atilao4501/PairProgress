import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { GoalsAccordionComponent } from "../../components/goals-accordion/goals-accordion.component";
import { MascotStatusComponent } from "../../components/mascot-status/mascot-status.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, GoalsAccordionComponent, MascotStatusComponent, FooterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
