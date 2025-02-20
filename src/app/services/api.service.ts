import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../../interfaces/loginModel';
import { ApiResponse } from '../../interfaces/apiResponse';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

 

  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<string>>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
    );

    return {
      success: response.success,
      message: response.message,
      data: { token: response.data },
    };
  }
}
