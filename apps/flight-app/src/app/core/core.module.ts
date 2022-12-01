import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { AUTH_INTERCEPTOR_PROVIDER } from './services/interceptors/auth.interceptor';
import { UnauthenticatedComponent } from './auth/unauthenticated.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { LogoutComponent } from './auth/logout.component';
import { LoggedOutComponent } from './auth/logged-out.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, FormsModule],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UnauthenticatedComponent,
    LoginComponent,
    LogoutComponent,
    LoggedOutComponent,
  ],
  exports: [HttpClientModule, NavbarComponent, SidebarComponent],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
})
export class CoreModule {}
