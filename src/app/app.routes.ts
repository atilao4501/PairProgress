import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { DashboardPageComponent } from '../pages/dashboard/dashboard-page.component';
import { GoalDetailedPageComponent } from '../pages/goal-detailed-page/goal-detailed-page.component';
import { MyProfilePageComponent } from '../pages/my-profile-page/my-profile-page.component';
import { CreateUserPageComponent } from '../pages/create-user/create-user-page.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },

  {
    path: 'login',
    pathMatch: 'full',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: DashboardPageComponent,
  },

  {
    path: 'goal/:id',
    component: GoalDetailedPageComponent,
  },
  {
    path: 'profile',
    component: MyProfilePageComponent,
  },
  {
    path: 'create-user',
    component: CreateUserPageComponent,
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
