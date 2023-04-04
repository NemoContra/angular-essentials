import { createFeature, createReducer, on } from '@ngrx/store';
import { Flight } from '../entities/flights';
import { flightActions } from './flight.actions';

export interface FlightsState {
  flights: Flight[] | undefined;
  flightsLoading: boolean;
  flightsErrorCode: number | undefined;
  flightsLoadingPermitted: boolean;
}

const initialState: FlightsState = {
  flights: undefined,
  flightsLoading: false,
  flightsErrorCode: undefined,
  flightsLoadingPermitted: false,
};

export const flightsFeature = createFeature({
  name: 'flights',
  reducer: createReducer(
    initialState,
    on(flightActions.loadFlights, (state) => ({
      ...state,
      flights: undefined,
      flightsErrorCode: undefined,
      flightsLoading: true,
    })),
    on(flightActions.loadFlightsSuccess, (state, { flights }) => ({
      ...state,
      flightsLoading: false,
      flights,
    })),
    on(flightActions.loadFlightsError, (state, { flightsErrorCode }) => ({
      ...state,
      flightsLoading: false,
      flightsErrorCode,
    }))
  ),
});
