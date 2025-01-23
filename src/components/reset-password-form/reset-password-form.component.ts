import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [NgClass],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.css',
})
export class ResetPasswordFormComponent {
  public exampleEmail = '****le@gmail.com';
  public displayCodeContainer: boolean = false;

  toggleDisplayCodeContainer() {
    this.displayCodeContainer = !this.displayCodeContainer;
    console.log(this.displayCodeContainer);
  }
}
