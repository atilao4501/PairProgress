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
  styleUrls: ['./reset-password-form.component.css'], // Corrigido de "styleUrl" para "styleUrls"
})
export class ResetPasswordFormComponent {
  public exampleEmail = '****le@gmail.com'; // Exemplo de e-mail para exibição
  public email: string = ''; // Armazena o e-mail inserido pelo usuário
  public verificationCode: string = ''; // Armazena o código de verificação inserido
  public newPassword: string = ''; // Armazena a nova senha inserida
  public errorMessage: string = ''; // Mensagem de erro para exibição no pop-up
  public newPasswordConfirmation: string = '';
  public displayContainers = {
    codeContainer: false,
    emailContainer: true,
    newPasswordContainer: false,
  };

  constructor(public loadingService: LoadingService) {}

  /**
   * Envia um código de verificação para o e-mail fornecido.
   * @param email O e-mail para o qual o código será enviado.
   * @returns Retorna true após o envio do código.
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
   * Verifica o código de verificação inserido.
   * @param code O código de verificação a ser validado.
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
   * Exibe uma mensagem de erro no pop-up.
   * @param message A mensagem de erro a ser exibida.
   */
  private displayError(message: string): void {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = ''; // Limpa a mensagem de erro após 5 segundos
    }, 5000);
  }
}
