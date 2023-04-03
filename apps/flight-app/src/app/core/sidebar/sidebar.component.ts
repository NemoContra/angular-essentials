import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'flight-sidebar',
  templateUrl: 'sidebar.component.html',
  standalone: true,
  imports: [RouterLinkActive],
})
export class SidebarComponent {}
