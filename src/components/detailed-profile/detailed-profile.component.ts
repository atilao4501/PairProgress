import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ConfirmActionService } from '../../services/confirmAction.service';
import { ConfirmActionDialogComponent } from '../confirm-action-dialog/confirm-action-dialog.component';
import { User } from '../../interfaces/user/user';
import { UpdateUserInput } from '../../interfaces/user/updateUserInput';
import { UserService } from '../../app/services/user.service';
import { LoadingService } from '../../services/loading.service';
import { PairService } from '../../app/services/pair.service';

@Component({
  selector: 'app-detailed-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, ConfirmActionDialogComponent],
  templateUrl: './detailed-profile.component.html',
  styleUrl: './detailed-profile.component.css',
})
export class DetailedProfileComponent {
  constructor(
    public confirmActionService: ConfirmActionService,
    public userService: UserService,
    private loadingService: LoadingService,
    private pairService: PairService
  ) {}

  public hasPartner: boolean = true;
  public newPartnerCode: string = '';
  public addPartnerErrorMessage: string = '';

  public async checkAddPartner(partnerCode: string) {
    let pairUserName: string;
    try {
      this.loadingService.show();
      pairUserName = (await this.userService.getUserNameByUserCode(partnerCode))
        .data;
    } catch (error: any) {
      this.addPartnerErrorMessage = error.message
        ? error.message
        : 'An error occurred while fetching the partner name';
      setTimeout(() => {
        this.addPartnerErrorMessage = '';
      }, 5000);
      return;
    } finally {
      this.loadingService.hide();
    }

    this.confirmActionService.show(
      'Add partner',
      'Are you sure you want to add ' + pairUserName + ' as your partner?',
      () => this.addPartner(partnerCode)
    );
  }

  public async addPartner(partnerCode: string) {
    this.loadingService.show();
    try {
      await this.pairService.addPair(partnerCode);
      await this.userService.getUserInfo();
      this.confirmActionService.hide();
    } catch (error: any) {
      this.confirmActionService.changeErrorMessage(
        error.message ? error.message : 'An error occurred'
      );
    } finally {
      this.loadingService.hide();
    }
  }

  public async saveProfile(updateUserInput: UpdateUserInput) {
    this.loadingService.show();
    try {
      await this.userService.updateUser(updateUserInput);
      this.confirmActionService.hide();
    } catch (error: any) {
      this.confirmActionService.changeErrorMessage(
        error.message ? error.message : 'An error occurred'
      );
    } finally {
      this.loadingService.hide();
    }
  }

  public checkRemovePartner() {
    this.confirmActionService.show(
      'Remove partner',
      'Are you sure you want to remove your current partner?',
      () => this.removePartner()
    );
    console.log('remove partner');
  }

  public async removePartner() {
    this.loadingService.show();
    try {
      await this.pairService.removePair();
      await this.userService.getUserInfo();
      this.confirmActionService.hide();
    } catch (error: any) {
      this.confirmActionService.changeErrorMessage(
        error.message ? error.message : 'An error occurred'
      );
    } finally {
      this.loadingService.hide();
    }
  }

  public onSubmit(updateUserInput: UpdateUserInput): void {
    this.confirmActionService.show(
      'Save changes',
      'Are you sure you want to change your profile?',
      () => this.saveProfile(updateUserInput)
    );
    console.log('submit');
  }
}
