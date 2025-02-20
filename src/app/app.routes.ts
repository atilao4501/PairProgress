import { Routes } from '@angular/router';
import { LoginPageComponent } from '../pages/login/login-page.component';
import { DashboardPageComponent } from '../pages/dashboard/dashboard-page.component';

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

  //   {
  //     path: 'one-off',
  //     children: [
  //       {
  //         path: 'liga-e-desliga',
  //         component: OneOffTogglePage,
  //         canActivate: [authGuard],
  //         data: {
  //           permissions: ['OneOff.Acesso.Atualizar'],
  //         },
  //       },
  //       {
  //         path: 'relatorio',
  //         component: OneOffReportPage,
  //         canActivate: [authGuard],
  //         data: {
  //           permissions: ['OneOff.RegistroDeVenda.Ler'],
  //         },
  //       },
  //     ],
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
