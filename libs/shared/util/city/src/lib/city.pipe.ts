import { Pipe, PipeTransform } from '@angular/core';

export type CityFormat = 'long' | 'short';

@Pipe({
  name: 'city',
  standalone: true,
})
export class CityPipe implements PipeTransform {
  transform(value: string, fmt?: CityFormat): string {
    let short, long: string;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        short = long = value;
    }

    if (fmt == 'short') {
      return short;
    }

    return long;
  }
}
