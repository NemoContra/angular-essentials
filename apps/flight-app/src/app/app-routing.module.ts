import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/guards/auth.guard';
import { UnauthenticatedComponent } from './core/auth/unauthenticated.component';
import { LoginComponent } from './core/auth/login.component';
import { LogoutComponent } from './core/auth/logout.component';
import { LoggedOutComponent } from './core/auth/logged-out.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'flight-booking',
    pathMatch: 'full',
  },
  {
    path: 'flight-booking',
    loadChildren: () =>
      import('./flight-booking/flight-booking.module').then(
        (m) => m.FlightBookingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'unauthenticated',
    component: UnauthenticatedComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'logged-out',
    component: LoggedOutComponent,
  },
  {
    path: '**',
    redirectTo: 'flight-booking',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
