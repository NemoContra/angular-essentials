import { createActionGroup, props } from '@ngrx/store';
import { Flight } from '../entities/flights';

export const flightActions = createActionGroup({
  source: 'flights',
  events: {
    'load flights': props<{ from: string; to: string }>(),
    'load flights success': props<{ flights: Flight[] }>(),
    'load flights error': props<{ flightsErrorCode: number }>(),
  },
});
