import { Component } from '@angular/core';
import { CreateUserFormComponent } from '../../components/create-user-form/create-user-form.component';

@Component({
  selector: 'app-create-user-page',
  standalone: true,
  imports: [CreateUserFormComponent],
  templateUrl: './create-user-page.component.html',
  styleUrl: './create-user-page.component.css',
})
export class CreateUserPageComponent {}
