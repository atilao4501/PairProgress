import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-reset-password-form',
  standalone: true,
  imports: [NgClass, LoadingComponent],
  templateUrl: './reset-password-form.component.html',
  styleUrl: './reset-password-form.component.css',
})
export class ResetPasswordFormComponent {
  constructor(public loadingService: LoadingService) {}

  public exampleEmail = '****le@gmail.com';
  public displayCodeContainer: boolean = false;

  public toggleDisplayCodeContainer() {
    this.displayCodeContainer = !this.displayCodeContainer;
    console.log(this.displayCodeContainer);
  }

  public loadingTest() {
    this.loadingService.show();
    console.log(this.loadingService.displayLoading);
  }
}
