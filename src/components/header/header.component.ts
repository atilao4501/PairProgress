import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../../interfaces/user/user';
import { UserService } from '../../app/services/user.service';
import { LoadingService } from '../../services/loading.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(
    public userService: UserService,
    private loadingService: LoadingService
  ) {}
  async ngOnInit() {
    try {
      this.loadingService.show();
      await this.userService.getUserInfo();
    } catch (error) {
      console.error('Error fetching user info:', error);
    } finally {
      this.loadingService.hide();
    }
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
