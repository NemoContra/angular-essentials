import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Flight } from '../../app.component';
import { debounceTime, distinctUntilChanged } from 'rxjs';

// type EditableFlight = Pick<Flight, 'id' | 'from' | 'to' | 'date'>;
type EditableFlight = Omit<Flight, 'delayed'>;

type EditForm = {
  [key in keyof EditableFlight]: FormControl<Flight[key]>;
};

@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss'],
})
export class FlightEditComponent {
  @Input() flight?: Flight;

  editForm = new FormGroup<EditForm>({
    id: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.required],
    }),
    from: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    to: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    date: new FormControl(new Date().toLocaleDateString(), {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  save(): void {
    console.log(this.editForm.value);
  }
}
