import { Component } from '@angular/core';
import { FlightService } from './core/services/flight.service';
import { Observable } from 'rxjs';

export interface Flight {
  id: number;
  from: string;
  to: string;
  date: string;
  delayed: boolean;
}

@Component({
  selector: 'flight-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hello World!';
  flights$: Observable<Flight[] | null> = this.flightService.getFlights();

  constructor(private flightService: FlightService) {}
}
