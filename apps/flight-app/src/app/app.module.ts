import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';

@NgModule({
  imports: [BrowserModule, CoreModule, SharedModule, FlightBookingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
