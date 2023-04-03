import { Injectable } from '@angular/core';
import { Flight } from '../entities/flights';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private httpClient: HttpClient) {}

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders({ Accept: 'application/json' });
    const params = new HttpParams({ fromObject: { from, to } });

    return this.httpClient.get<Flight[]>(url, { headers, params });
  }
}
