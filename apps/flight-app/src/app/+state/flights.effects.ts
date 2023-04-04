import { inject } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { flightActions } from './flight.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FlightService } from '../services/flight.service';
import { Flight } from '../entities/flights';
import { HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectLoadFlightsPermitted } from './flights.selectors';

export const loadFlights = createEffect(
  (
    actions$ = inject(Actions),
    flightService = inject(FlightService),
    store = inject(Store)
  ) =>
    actions$.pipe(
      ofType(flightActions.loadFlights),
      concatLatestFrom(() => store.select(selectLoadFlightsPermitted)),
      exhaustMap(([{ from, to }, flightsLoadingPermitted]) => {
        if (flightsLoadingPermitted) {
          return of(flightActions.loadFlightsError({ flightsErrorCode: 1 }));
        }

        return flightService.find(from, to).pipe(
          map((flights: Flight[]) =>
            flightActions.loadFlightsSuccess({ flights })
          ),
          catchError(({ status }: HttpErrorResponse) =>
            of(flightActions.loadFlightsError({ flightsErrorCode: status }))
          )
        );
      })
    ),
  { functional: true }
);
