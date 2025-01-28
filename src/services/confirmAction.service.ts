import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmActionService {
  public displayConfirmAction = false;

  public onConfirm?: () => any = () => {
    console.log('Confirm not implemented');
  };

  public onCancel?: () => any = () => {
    console.log('Cancel not implemented');
  };

  constructor() {
    console.log('ConfirmActionService');
  }

  public show(
    onConfirmCallback: () => any,
    onCancelCallback: () => any = () => {}
  ): void {
    this.displayConfirmAction = true;
    this.onConfirm = onConfirmCallback;
    this.onCancel = onCancelCallback;
  }

  public hide(): void {
    this.displayConfirmAction = false;
  }
}
