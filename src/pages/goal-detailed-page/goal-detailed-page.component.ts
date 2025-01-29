import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { GoalDetailedCardComponent } from "../../components/goal-detailed-card/goal-detailed-card.component";
import { HistoryCardComponent } from "../../components/history-card/history-card.component";
import { NewContributionCardComponent } from "../../components/new-contribution-card/new-contribution-card.component";

@Component({
  selector: 'app-goal-detailed-page',
  standalone: true,
  imports: [HeaderComponent, GoalDetailedCardComponent, HistoryCardComponent, NewContributionCardComponent],
  templateUrl: './goal-detailed-page.component.html',
  styleUrl: './goal-detailed-page.component.css'
})
export class GoalDetailedPageComponent {

}
