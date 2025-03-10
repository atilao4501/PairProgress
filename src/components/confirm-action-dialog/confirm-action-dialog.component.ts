import { Component, Input } from '@angular/core';
import { ConfirmActionService } from '../../services/confirmAction.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-confirm-action-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './confirm-action-dialog.component.html',
  styleUrl: './confirm-action-dialog.component.css',
})
export class ConfirmActionDialogComponent {
  constructor(public confirmActionService: ConfirmActionService) {}

  public confirm(): void {
    this.confirmActionService.onConfirm?.();
  }

  public cancel(): void {
    this.confirmActionService.onCancel?.();
    this.confirmActionService.hide();
  }
}
