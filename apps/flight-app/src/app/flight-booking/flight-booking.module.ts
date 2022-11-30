import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { SharedModule } from '../shared/shared.module';
import { FlightDetailsDirective } from './flight-details.directive';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightDetailsDirective,
    FlightEditComponent,
  ],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
