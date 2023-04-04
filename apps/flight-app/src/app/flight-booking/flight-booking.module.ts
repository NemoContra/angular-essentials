import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightDetailDirective } from './flight-detail/flight-detail.directive';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    FlightSearchComponent,
    FlightDetailDirective,
    FlightCardComponent,
  ],
  exports: [FlightSearchComponent],
})
export class FlightBookingModule {}
