import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../../interfaces/loginModel';
import { ApiResponse } from '../../interfaces/apiResponse';
import { firstValueFrom } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = environment.production;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  private async handleRequest<T>(
    promise: Promise<ApiResponse<T>>,
    isLoginRequest: boolean = false
  ): Promise<ApiResponse<T>> {
    try {
      return await promise;
    } catch (error: any) {
      if (error.status === 401 && !isLoginRequest) {
        this.router.navigate(['/login']);
      }
      throw error;
    }
  }

  async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    this.loadingService.show();
    try {
      const response = await this.handleRequest(
        firstValueFrom(
          this.http.post<ApiResponse<string>>(
            `${this.apiUrl}/auth/login`,
            credentials
          )
        )
      );
      return {
        success: response.success,
        message: response.message,
        data: { token: response.data },
      };
    } finally {
      this.loadingService.hide();
    }
  }

  private getAuthHeaders(): { headers: HttpHeaders } {
    let headers = new HttpHeaders();

    if (isPlatformBrowser(this.platformId)) {
      // ✅ Garante que só acessa localStorage no navegador
      const token = localStorage.getItem('token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return { headers };
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return await this.handleRequest(
      firstValueFrom(
        this.http.get<ApiResponse<T>>(
          `${this.apiUrl}/${endpoint}`,
          this.getAuthHeaders()
        )
      )
    );
  }

  async post<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return await this.handleRequest(
      firstValueFrom(
        this.http.post<ApiResponse<T>>(
          `${this.apiUrl}/${endpoint}`,
          body,
          this.getAuthHeaders()
        )
      )
    );
  }

  async put<T>(endpoint: string, body: any): Promise<ApiResponse<T>> {
    return await this.handleRequest(
      firstValueFrom(
        this.http.put<ApiResponse<T>>(
          `${this.apiUrl}/${endpoint}`,
          body,
          this.getAuthHeaders()
        )
      )
    );
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return await this.handleRequest(
      firstValueFrom(
        this.http.delete<ApiResponse<T>>(
          `${this.apiUrl}/${endpoint}`,
          this.getAuthHeaders()
        )
      )
    );
  }
}
