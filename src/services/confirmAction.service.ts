import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmActionService {
  public displayConfirmAction = false;

  constructor() {
    console.log('ConfirmActionService');
  }

  public show(): void {
    this.displayConfirmAction = true;
  }

  public hide(): void {
    this.displayConfirmAction = false;
  }
}
