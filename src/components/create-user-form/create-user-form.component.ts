import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [NgClass, LoadingComponent, FormsModule, CommonModule],
  templateUrl: './create-user-form.component.html',
  styleUrl: './create-user-form.component.css',
})
export class CreateUserFormComponent {
  public password: string = ''; // Armazena a nova senha inserida
  public errorMessage: string = ''; // Mensagem de erro para exibição no pop-up
  public passwordConfirmation: string = '';
  public email: string = '';
  public username: string = '';

  constructor(public loadingService: LoadingService) {}

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
