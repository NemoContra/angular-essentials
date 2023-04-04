import { Component, inject } from '@angular/core';
import { Flight } from '../../entities/flights';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FlightsState } from '../../+state/flights.feature';
import { FlightsFacade } from '../../+state/flights.facade';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  private flightsFacade = inject(FlightsFacade);

  formGroup = new FormGroup({
    from: new FormControl('', { nonNullable: true }),
    to: new FormControl('', { nonNullable: true }),
  });

  flightsViewModel$: Observable<FlightsState> =
    this.flightsFacade.flightsViewModel$;

  selectedFlight?: Flight;

  basket: Record<number, boolean> = {
    2: true,
    3: true,
    5: true,
  };

  searchFlights(): void {
    const { from, to } = this.formGroup.value;
    this.flightsFacade.searchFlights(from, to);
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
