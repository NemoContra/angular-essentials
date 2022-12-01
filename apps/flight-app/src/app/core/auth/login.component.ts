import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  template: `<form (submit)="login()" class="form-group">
    <div>
      <input type="text" class="form-control" />
    </div>
    <br />
    <div>
      <input type="password" class="form-control" />
    </div>
    <br />
    <button class="btn btn-default" type="submit">Login</button>
  </form>`,
})
export class LoginComponent {
  constructor(private router: Router, private tokenService: TokenService) {}

  login(): void {
    this.tokenService.setToken();
    this.router.navigate(['/flight-booking']);
  }
}
