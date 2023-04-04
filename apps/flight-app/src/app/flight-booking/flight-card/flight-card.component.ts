import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../../entities/flights';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
})
export class FlightCardComponent {
  @Input() item?: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selectedChange.emit(true);
  }

  deselect() {
    this.selectedChange.emit(false);
  }
}
