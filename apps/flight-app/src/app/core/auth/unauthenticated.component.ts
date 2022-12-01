import { Component } from '@angular/core';

@Component({
  template: `<p>Please login first!</p>
    <a class="btn btn-default" [routerLink]="['/login']">Go to Login</a>`,
})
export class UnauthenticatedComponent {}
