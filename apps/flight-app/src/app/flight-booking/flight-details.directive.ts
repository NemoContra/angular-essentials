import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { Flight } from '../app.component';

@Directive({
  selector: 'flight-card[flightDetails]',
})
export class FlightDetailsDirective {
  private _flightDetails?: Flight;

  @Input()
  get flightDetails(): Flight | undefined {
    return this._flightDetails;
  }
  set flightDetails(value: Flight | undefined) {
    this._flightDetails = value;
    this.title = `This flight goes from ${value?.from} to ${value?.to} and has flight no. ${value?.id}`;
  }

  @HostBinding() title = '';

  @HostListener('click')
  onClick(): void {
    alert(this.title);
  }
}
