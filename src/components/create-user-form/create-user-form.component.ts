import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../../services/loading.service';
import { CreateUserInput } from '../../interfaces/user/createUserInput';
import { ApiService } from '../../app/services/api.service';
import { UserService } from '../../app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [NgClass, LoadingComponent, FormsModule, CommonModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.css',
})
export class CreateUserFormComponent {
  public password: string = '';
  public errorMessage: string = '';
  public passwordConfirmation: string = '';
  public email: string = '';
  public username: string = '';
  public passwordVisible: boolean = false;
  public passwordConfirmationVisible: boolean = false;

  constructor(
    public loadingService: LoadingService,
    private userService: UserService,
    private router: Router
  ) {}

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

  public async createUser(createUserInput: CreateUserInput) {
    this.loadingService.show();
    const emailExists = await this.userService.checkIfEmailExists(
      createUserInput.email
    );
    if (emailExists.data == true) {
      this.loadingService.hide();
      this.displayError(emailExists.message);
      return;
    }

    const usernameExists = await this.userService.checkIfUsernameExists(
      createUserInput.username
    ); 
    if (usernameExists.data == true) {
      this.loadingService.hide();
      this.displayError(usernameExists.message);
      return;
    }

    const createUser = await this.userService.createUser(createUserInput);
    if (createUser.success == false) {
      this.loadingService.hide();
      this.displayError(createUser.message);
      return;
    } else {
      this.loadingService.hide();
      this.router.navigate(['/login']);
    }
  }
}
