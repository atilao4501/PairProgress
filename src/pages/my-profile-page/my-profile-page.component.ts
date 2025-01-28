import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { DetailedProfileComponent } from "../../components/detailed-profile/detailed-profile.component";
import { ConfirmActionDialogComponent } from "../../components/confirm-action-dialog/confirm-action-dialog.component";

@Component({
  selector: 'app-my-profile-page',
  standalone: true,
  imports: [HeaderComponent, DetailedProfileComponent, ConfirmActionDialogComponent],
  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.css'
})
export class MyProfilePageComponent {

}
