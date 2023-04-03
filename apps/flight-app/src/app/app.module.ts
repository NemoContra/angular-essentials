import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlightSearchModule } from './flight-search/flight-search.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, HttpClientModule, SharedModule, FlightSearchModule],
  declarations: [AppComponent, SidebarComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
