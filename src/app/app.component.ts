import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [[RouterModule], LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PairProgress';

  public test(): void {
    console.log('test');
  }
}
