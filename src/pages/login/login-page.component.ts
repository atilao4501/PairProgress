import { Component } from '@angular/core';
import { LoginCardComponent } from '../../components/login-card/login-card.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginCardComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {}
