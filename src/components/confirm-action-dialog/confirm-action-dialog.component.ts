import { Component, Input } from '@angular/core';
import { ConfirmActionService } from '../../services/confirmAction.service';

@Component({
  selector: 'app-confirm-action-dialog',
  standalone: true,
  imports: [],
  templateUrl: './confirm-action-dialog.component.html',
  styleUrl: './confirm-action-dialog.component.css',
})
export class ConfirmActionDialogComponent {
  constructor(public confirmActionService: ConfirmActionService) {}

  @Input() public title: string = '';
  @Input() public message: string = '';
  @Input() public onConfirm?: () => void; // Optional function
  @Input() public onCancel?: () => void; // Optional function

  public confirm(): void {
    this.onConfirm?.(); // Safe call
  }

  public cancel(): void {
    console.log('Cancel');
    this.confirmActionService.hide();
    this.onCancel?.(); // Safe call
  }
}
