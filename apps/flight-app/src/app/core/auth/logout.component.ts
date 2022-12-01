import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  template: `<button class="btn btn-default" (click)="logout()">
    Logout
  </button>`,
})
export class LogoutComponent {
  constructor(private router: Router, private tokenService: TokenService) {}

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate(['/logged-out']);
  }
}
