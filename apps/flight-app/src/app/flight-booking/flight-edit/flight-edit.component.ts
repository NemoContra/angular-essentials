import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Flight } from '../../app.component';

type EditableFlight = Pick<Flight, 'id' | 'from' | 'to' | 'date'>;
// type EditableFlight = Omit<Flight, 'delayed'>;

type EditForm = {
  [key in keyof EditableFlight]: FormControl<Flight[key]>;
};

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss'],
})
export class FlightEditComponent {
  editForm = new FormGroup<EditForm>({
    id: new FormControl(1, { nonNullable: true }),
    from: new FormControl('', { nonNullable: true }),
    to: new FormControl('', { nonNullable: true }),
    date: new FormControl('', { nonNullable: true }),
  });

  save(): void {
    console.log(this.editForm.value);
  }
}
