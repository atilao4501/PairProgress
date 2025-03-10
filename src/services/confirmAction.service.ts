import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmActionService {
  public displayConfirmAction = false;
  public title = '';
  public message = '';
  public errorMessage = '';

  public onConfirm?: () => any = () => {};

  public onCancel?: () => any = () => {
    console.log('Cancel not implemented');
  };

  constructor() {
    console.log('ConfirmActionService');
  }

  public show(
    newTitle: string,
    newMessage: string,
    onConfirmCallback: () => any,
    onCancelCallback: () => any = () => {}
  ): void {
    this.title = newTitle;
    this.message = newMessage;
    this.displayConfirmAction = true;
    this.onConfirm = onConfirmCallback;
    this.onCancel = onCancelCallback;
  }

  public changeErrorMessage(newErrorMessage: string): void {
    this.errorMessage = newErrorMessage;
    setTimeout(() => {
      this.errorMessage = '';
    }, 5000);
  }

  public hide(): void {
    this.displayConfirmAction = false;
  }
}
