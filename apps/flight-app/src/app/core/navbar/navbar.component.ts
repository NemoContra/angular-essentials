import { Component } from '@angular/core';

@Component({
  selector: 'flight-navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  private sidebarVisible = false;

  sidebarToggle(): void {
    const body = document.getElementsByTagName('body')[0];

    if (!this.sidebarVisible) {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    } else {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    }
  }
}
