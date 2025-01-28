import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConfirmActionService } from '../../services/confirmAction.service';

@Component({
  selector: 'app-detailed-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detailed-profile.component.html',
  styleUrl: './detailed-profile.component.css',
})
export class DetailedProfileComponent {
  constructor(public confirmActionService: ConfirmActionService) {}

  public hasPartner: boolean = true;
  public username: string = 'joanna';
  public email: string = 'email@gmail.com';
  public partnerName: string = 'Cleyton rasta';
  public newPartnerCode: number = 0;

  public addPartner() {
    console.log('add partner ' + this.newPartnerCode);
  }

  public removePartner() {
    this.confirmActionService.show(this.addPartner);
    console.log('remove partner');
  }

  public onSubmit(): void {
    console.log('submit');
  }
}
