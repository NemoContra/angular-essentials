import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flightsFeature, FlightsState } from './flights.feature';
import { Store } from '@ngrx/store';
import { flightActions } from './flight.actions';

@Injectable({ providedIn: 'root' })
export class FlightsFacade {
  private store = inject(Store);

  flightsViewModel$: Observable<FlightsState> = this.store.select(
    flightsFeature.selectFlightsState
  );

  searchFlights(from: string = '', to: string = '') {
    this.store.dispatch(flightActions.loadFlights({ from, to }));
  }
}
