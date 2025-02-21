import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../../interfaces/loginModel';
import { ApiResponse } from '../../interfaces/apiResponse';
import { firstValueFrom, map, Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    this.loadingService.show();

    const response = await firstValueFrom(
      this.http.post<ApiResponse<string>>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
    );

    this.loadingService.hide();
    return {
      success: response.success,
      message: response.message,
      data: { token: response.data },
    };
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await firstValueFrom(
      this.http.get<ApiResponse<T>>(
        `${this.apiUrl}/${endpoint}`,
        this.getAuthHeaders()
      )
    );
    return response;
  }

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    const response = await firstValueFrom(
      this.http.post<ApiResponse<T>>(
        `${this.apiUrl}/${endpoint}`,
        body,
        this.getAuthHeaders()
      )
    );
    return response;
  }

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    const response = await firstValueFrom(
      this.http.put<ApiResponse<T>>(
        `${this.apiUrl}/${endpoint}`,
        body,
        this.getAuthHeaders()
      )
    );
    return response;
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await firstValueFrom(
      this.http.delete<ApiResponse<T>>(
        `${this.apiUrl}/${endpoint}`,
        this.getAuthHeaders()
      )
    );
    return response;
  }
}
