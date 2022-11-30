import { Injectable } from '@angular/core';
import { Flight } from '../../app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FlightService {
  constructor(private httpClient: HttpClient) {}

  getFlights(): Observable<Flight[]> {
    return this.httpClient.get<Flight[]>('http://www.angular.at/api/flight');
  }

  findFlights(from: string, to: string): Observable<Flight[]> {
    const params = new HttpParams({ fromObject: { from, to } });
    return this.httpClient.get<Flight[]>('http://www.angular.at/api/flight', {
      params,
    });
  }
}
