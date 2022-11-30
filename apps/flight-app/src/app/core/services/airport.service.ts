import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CityCacheService, CityFormat } from './city-cache.service';

@Injectable({ providedIn: 'root' })
export class AirportService {
  constructor(
    private httpClient: HttpClient,
    private cityCacheService: CityCacheService
  ) {}

  getCity(name: string, cityFormat: CityFormat): Observable<string> {
    const cachedCity$: Observable<string> | undefined =
      this.cityCacheService.getCity(name, cityFormat);

    if (cachedCity$) {
      return cachedCity$;
    }

    const url = `http://www.angular.at/api/airport/${
      cityFormat === 'long' ? 'fullName' : 'code'
    }`;
    const params = new HttpParams().set('name', name);

    const city$ = this.httpClient
      .get<string>(url, {
        params,
      })
      .pipe(shareReplay({ refCount: true }));

    this.cityCacheService.setCity(name, cityFormat, city$);

    return city$;
  }
}
