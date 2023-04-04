import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { LetModule } from '@ngrx/component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightBookingModule, LetModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
