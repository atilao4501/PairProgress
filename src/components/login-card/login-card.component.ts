import { Component } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { LoginRequest } from '../../interfaces/loginModel';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/apiResponse';
import { LoadingService } from '../../services/loading.service';
import { LoadingComponent } from '../loading/loading.component';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [FormsModule, LoadingComponent, CommonModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})
export class LoginCardComponent {
  passwordFieldType: string = 'password';
  errorMessage: string = '';
  username: any;
  password: any;

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  togglePasswordVisibility() {
    this.passwordFieldType =
      this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  async login(username: string, password: string) {
    if (!username || !password) {
      this.errorMessage = 'Both username and password are required.';
      return;
    }

    try {
      this.errorMessage = '';

      let loginRequest: LoginRequest = {
        username: username,
        password: password,
      };

      console.log('Logging in...');
      const response = await this.apiService.login(loginRequest);
      console.log('Success: ' + response);
      localStorage.setItem('token', response.data.token);

      this.router.navigate(['/home']);
    } catch (error: any) {
      let apiError = error.error as ApiResponse<string>;
      this.errorMessage = apiError.message;
      console.error(apiError.success);
      this.loadingService.hide();
    }
  }
}
