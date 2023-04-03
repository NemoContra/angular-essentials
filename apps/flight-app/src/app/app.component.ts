import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CityPipe } from '@angular-essentials/shared/util/city';
import { FlightSearchComponent } from './flight-search/flight-search.component';

@Component({
  selector: 'flight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    SidebarComponent,
    NavbarComponent,
    FormsModule,
    CityPipe,
    FlightSearchComponent,
  ],
})
export class AppComponent {
  title = 'Hello World!';
  showFlightSearch = true;

  callCD(): void {
    console.log('Change Detection');
  }
}
