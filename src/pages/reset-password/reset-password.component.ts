import { Component } from '@angular/core';
import { LoadingComponent } from '../../components/loading/loading.component';
import { ResetPasswordFormComponent } from '../../components/reset-password-form/reset-password-form.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [LoadingComponent, ResetPasswordFormComponent, NgClass],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {}
