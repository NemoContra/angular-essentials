import { Component } from '@angular/core';
import { Flight } from '../../app.component';
import { Observable } from 'rxjs';
import { FlightService } from '../../core/services/flight.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
})
export class FlightSearchComponent {
  from = '';
  to = '';
  flights$?: Observable<Flight[]>;
  selectedFlight: Flight | undefined;

  basket: Record<number, boolean> = {};

  constructor(private flightService: FlightService) {}

  search(form: NgForm): void {
    if (form.valid) {
      this.flights$ = this.flightService.findFlights(this.from, this.to);
    }
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
