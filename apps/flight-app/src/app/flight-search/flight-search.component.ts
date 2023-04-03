import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flights';
import { FlightService } from '../services/flight.service';
import { CityPipe } from '@angular-essentials/shared/util/city';
import { FormsModule } from '@angular/forms';
import { DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
  standalone: true,
  imports: [CityPipe, FormsModule, NgIf, NgForOf, JsonPipe, DatePipe],
})
export class FlightSearchComponent {
  from = '';
  to = '';
  flights: Flight[] = [];

  selectedFlight?: Flight;

  private flightService = inject(FlightService);

  constructor() {
    console.log('CONSTRUCT');
  }

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
        console.log('RESOLVED FLIGHTS');
      },
      error: (err) => console.error(err),
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
