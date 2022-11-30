import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CityFormat } from '../core/services/city-cache.service';
import { AirportService } from '../core/services/airport.service';

@Pipe({
  name: 'asyncCity',
  pure: true,
})
export class AsyncCityPipe implements PipeTransform {
  constructor(private airportService: AirportService) {}

  transform(name: string, cityFormat: CityFormat = 'long'): Observable<string> {
    return this.airportService.getCity(name, cityFormat);
  }
}
