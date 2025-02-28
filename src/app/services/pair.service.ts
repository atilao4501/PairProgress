import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class PairService {
  constructor(private apiService: ApiService) {}

  public async removePair() {
    try {
      this.apiService.delete('Pair/DeletePairByToken');
    } catch (error: any) {
      throw error.error;
    }
  }

  public async addPair(secondUserCode: string) {
    try {
      await this.apiService.post(
        'Pair/AddPair?userCode2=' + secondUserCode,
        null
      );
    } catch (error: any) {
      throw error.error;
    }
  }
}
