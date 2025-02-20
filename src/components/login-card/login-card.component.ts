import { Component } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { LoginRequest } from '../../interfaces/loginModel';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../../interfaces/apiResponse';
import { LoadingService } from '../../services/loading.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [FormsModule, LoadingComponent],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css',
})
export class LoginCardComponent {
  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {}

  test() {
    console.log('test');
  }

  async login(username: string, password: string) {
    try {
      this.loadingService.show();

      let loginRequest: LoginRequest = {
        username: username,
        password: password,
      };

      console.log('Logging in...');
      const response = await this.apiService.login(loginRequest);
      console.log('Sucess: ' + response);
      localStorage.setItem('token', response.data.token);
      this.loadingService.hide();
    } catch (error: any) {
      let apiError = error.error as ApiResponse<string>;
      console.error(apiError.success);
      this.loadingService.hide();
    }
  }
}
