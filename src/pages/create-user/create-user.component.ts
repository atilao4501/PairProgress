import { Component } from '@angular/core';
import { CreateUserFormComponent } from "../../components/create-user-form/create-user-form.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CreateUserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

}
