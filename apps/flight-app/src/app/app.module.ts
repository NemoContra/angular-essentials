import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchModule } from './flight-search/flight-search.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FlightSearchModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
