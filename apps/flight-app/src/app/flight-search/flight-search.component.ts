import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Flight } from '../entities/flights';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent {
  from = '';
  to = '';
  flights: Flight[] = [];
  selectedFlight?: Flight;

  private httpClient = inject(HttpClient);

  search(): void {
    const url = 'http://www.angular.at/api/flight';

    const params = new HttpParams({
      fromObject: { from: this.from, to: this.to },
    });

    this.httpClient.get<Flight[]>(url, { params }).subscribe({
      next: (flights: Flight[]) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
