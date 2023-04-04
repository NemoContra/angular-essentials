import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightDetailDirective } from '../flight-detail/flight-detail.directive';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FlightSearchComponent, FlightDetailDirective],
  exports: [FlightSearchComponent],
})
export class FlightSearchModule {}
