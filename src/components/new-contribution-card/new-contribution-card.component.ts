import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-contribution-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-contribution-card.component.html',
  styleUrl: './new-contribution-card.component.css',
})
export class NewContributionCardComponent {
  public goalId: number = 0;
  public amount?: number;
  public date: Date = new Date();

  public submitContribution(): void {
    console.log('Submitting contribution');
  }
}
