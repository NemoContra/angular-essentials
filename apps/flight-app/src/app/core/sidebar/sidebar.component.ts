import { Component } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'flight-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  isAuthenticated$ = this.tokenService.isAuthenticated$;

  constructor(private tokenService: TokenService) {}
}
