import { createSelector } from '@ngrx/store';
import { flightsFeature } from './flights.feature';

export const selectLoadFlightsPermitted = createSelector(
  flightsFeature.selectFlightsState,
  (state) => state.flightsLoadingPermitted
);
