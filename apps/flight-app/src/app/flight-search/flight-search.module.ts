import { NgModule } from '@angular/core';
import { FlightSearchComponent } from './flight-search.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [FlightSearchComponent],
  exports: [FlightSearchComponent],
})
export class FlightSearchModule {}
