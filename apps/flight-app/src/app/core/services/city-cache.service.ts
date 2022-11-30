import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export type CityFormat = 'long' | 'short';

@Injectable({ providedIn: 'root' })
export class CityCacheService {
  private cityCacheMap: Record<CityFormat, Record<string, Observable<string>>> =
    {
      long: {},
      short: {},
    };

  setCity(
    name: string,
    cityFormat: CityFormat,
    result: Observable<string>
  ): void {
    this.cityCacheMap[cityFormat][name] = result;
  }

  getCity(
    name: string,
    cityFormat: CityFormat
  ): Observable<string> | undefined {
    return this.cityCacheMap[cityFormat][name];
  }
}
