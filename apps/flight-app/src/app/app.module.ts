import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  imports: [BrowserModule, CoreModule, FlightBookingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
