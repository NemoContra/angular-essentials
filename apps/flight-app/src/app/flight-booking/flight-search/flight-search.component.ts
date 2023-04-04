import { Component, inject } from '@angular/core';
import { Flight } from '../../entities/flights';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  from = '';
  to = '';
  flights: Flight[] = [];

  selectedFlight?: Flight;

  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err) => console.error(err),
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}