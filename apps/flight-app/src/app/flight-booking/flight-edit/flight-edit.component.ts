import { Component } from '@angular/core';
import { FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Flight } from '../../app.component';

type EditableFlight = Pick<Flight, 'id' | 'from' | 'to' | 'date'>;

type EditForm = {
  [key in keyof EditableFlight]: [Flight[key] | null, ValidatorFn[]?];
};

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss'],
})
export class FlightEditComponent {
  editForm = this.formBuilder.group<EditForm>({
    id: [1],
    from: [null, [Validators.required, Validators.minLength(3)]],
    to: [null],
    date: [null],
  });

  constructor(private formBuilder: FormBuilder) {}

  save(): void {
    console.log(this.editForm.value);
  }
}
