import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from '@angular-essentials/shared/util/city';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CORE_COMPONENTS } from './core/core-components';

@Component({
  selector: 'flight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    ...CORE_COMPONENTS,
    NgIf,
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
