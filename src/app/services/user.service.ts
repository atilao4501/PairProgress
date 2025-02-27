import { Injectable } from '@angular/core';
import { CreateUserInput } from '../../interfaces/user/createUserInput';
import { ApiService } from './api.service';
import { User } from '../../interfaces/user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  public async createUser(CreateUserInput: CreateUserInput) {
    try {
      return this.apiService.post('Auth/register', CreateUserInput);
    } catch (error: any) {
      throw error.error;
    }
  }

  public async checkIfUsernameExists(username: string) {
    try {
      return await this.apiService.get(
        `User/CheckIfUsernameExists/${username}`
      );
    } catch (error: any) {
      throw error.error;
    }
  }

  public async getUserInfo() {
    try {
      const user = (await this.apiService.get<User>('User/GetUserByToken'))
        .data;

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    } catch (error: any) {
      throw error.error;
    }
  }

  public async updateUser() {}

  public async checkIfEmailExists(email: string) {
    try {
      return this.apiService.get(`User/CheckIfEmailExists/${email}`);
    } catch (error: any) {
      throw error.error;
    }
  }
}
