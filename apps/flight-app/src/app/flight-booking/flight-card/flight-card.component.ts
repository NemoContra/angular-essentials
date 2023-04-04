import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../../entities/flights';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
})
export class FlightCardComponent {
  @Input() item: Flight | undefined;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.emit(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.emit(this.selected);
  }
}
