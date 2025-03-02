import { Injectable } from '@angular/core';
import { CreateUserInput } from '../../interfaces/user/createUserInput';
import { ApiService } from './api.service';
import { User } from '../../interfaces/user/user';
import { UpdateUserInput } from '../../interfaces/user/updateUserInput';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  public currentUser: User = {
    userCode: '',
    userName: '',
    email: '',
    pairName: null,
    pairEmail: null,
    pairCode: null,
  };

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

      this.currentUser = user;

      return user;
    } catch (error: any) {
      throw error.error;
    }
  }

  public async getUserNameByUserCode(userCode: string) {
    try {
      return await this.apiService.get<string>(
        `User/GetUserNameByUserCode/${userCode}`
      );
    } catch (error: any) {
      throw error.error;
    }
  }

  public async updateUser(updateUserInput: UpdateUserInput) {
    try {
      try {
        await this.checkIfEmailExists(updateUserInput.email);
        await this.checkIfUsernameExists(updateUserInput.username);
      } catch (error) {
        throw error;
      }

      await this.apiService.put('User/EditUserByToken', updateUserInput);
      await this.getUserInfo();
    } catch (error: any) {
      throw error.error;
    }
  }

  public async checkIfEmailExists(email: string) {
    try {
      return this.apiService.get(`User/CheckIfEmailExists/${email}`);
    } catch (error: any) {
      throw error.error;
    }
  }
}
