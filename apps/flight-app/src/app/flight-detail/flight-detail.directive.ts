import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { Flight } from '../entities/flights';

@Directive({
  selector: '[flightDetail]',
})
export class FlightDetailDirective implements OnInit {
  @Input() flightDetail?: Flight;
  @HostBinding() title = '';

  @HostListener('click')
  onClick(): void {
    alert(`From ${this.flightDetail?.from} to ${this.flightDetail?.to}`);
  }

  ngOnInit() {
    if (this.flightDetail) {
      this.title = `From ${this.flightDetail?.from} to ${this.flightDetail?.to}`;
    }
  }
}
