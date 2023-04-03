import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flights';
import { FlightService } from '../services/flight.service';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  from = '';
  to = '';
  flights$?: Observable<Flight[]>;

  selectedFlight?: Flight;

  private flightService = inject(FlightService);

  search(): void {
    this.flights$ = this.flightService.find(this.from, this.to).pipe(
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
