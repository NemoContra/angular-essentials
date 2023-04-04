import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { isDevMode, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { LetModule } from '@ngrx/component';
import { provideState, provideStore } from '@ngrx/store';
import { flightsFeature } from './+state/flights.feature';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { loadFlights } from './+state/flights.effects';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightBookingModule, LetModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  providers: [
    provideStore(),
    provideState(flightsFeature),
    isDevMode() ? provideStoreDevtools({ name: 'flights' }) : [],
    provideEffects({ loadFlights }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
