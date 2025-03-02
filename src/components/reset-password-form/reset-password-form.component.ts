import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../../services/loading.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [NgClass, LoadingComponent, FormsModule, CommonModule],
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css'],
})
export class ResetPasswordFormComponent {
  public exampleEmail = '****le@gmail.com'; // Example email for display
  public email: string = ''; // Stores the email entered by the user
  public verificationCode: string = ''; // Stores the verification code entered
  public newPassword: string = ''; // Stores the new password entered
  public errorMessage: string = ''; // Error message for display in the pop-up
  public newPasswordConfirmation: string = '';
  public displayContainers = {
    codeContainer: false,
    emailContainer: true,
    newPasswordContainer: false,
  };

  constructor(public loadingService: LoadingService) {}

  /**
   * Sends a verification code to the provided email.
   * @param email The email to which the code will be sent.
   * @returns Returns true after sending the code.
   */
  public sendCodeViaEmail(email: string): boolean {
    console.log('Sending code via email: ' + email);
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
      this.displayContainers.emailContainer = false;
      this.displayContainers.codeContainer = true;
      //this.toggleDisplayCodeContainer();
    }, 5000);

    return true;
  }

  /**
   * Verifies the verification code entered.
   * @param code The verification code to be validated.
   */
  public verifyCode(code: string): void {
    console.log('Verifying code: ' + code);
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
      console.log('Code verified successfully!');
      (this.displayContainers.codeContainer = false),
        (this.displayContainers.newPasswordContainer = true);
    }, 3000);
  }

  /**
   * Displays an error message in the pop-up.
   * @param message The error message to be displayed.
   */
  private displayError(message: string): void {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''; // Clears the error message after 5 seconds
    }, 5000);
  }
}
