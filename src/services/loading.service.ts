import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public displayLoading = false;

  constructor() {
    console.log('LoadingService');
  }

  public show(): void {
    this.displayLoading = true;
  }

  public hide(): void {
    this.displayLoading = false;
  }
}
