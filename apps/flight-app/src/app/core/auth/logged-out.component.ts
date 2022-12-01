import { Component } from '@angular/core';

@Component({
  template: `<p>You have been logged out! To use the app please login again.</p>
    <a class="btn btn-default" [routerLink]="['/login']">Go to Login</a>`,
})
export class LoggedOutComponent {}
