import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConfirmActionService } from '../../services/confirmAction.service';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';

@Component({
  selector: 'app-detailed-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmActionDialogComponent],
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

  public saveProfile() {
    console.log('Profile saved for user: ' + this.username);
  }

  public removePartner() {
    this.confirmActionService.show(
      'Titulo',
      'Tem certeza mesmo?',
      this.addPartner.bind(this)
    );
    console.log('remove partner');
  }

  public onSubmit(): void {
    this.confirmActionService.show(
      'Action',
      'Are you sure you want to change your profile?',
      this.saveProfile.bind(this)
    );
    console.log('submit');
  }
}
