import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Flight } from '../../entities/flights';
import { FlightService } from '../../services/flight.service';
import { FormControl, FormGroup } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  interval,
  Observable,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss'],
})
export class FlightSearchComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    from: new FormControl('', { nonNullable: true }),
    to: new FormControl('', { nonNullable: true }),
  });

  flights$: Observable<Flight[]> = this.formGroup.valueChanges.pipe(
    filter(({ from, to }) => !!(from && to)),
    debounceTime(300),
    distinctUntilChanged(
      (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
    ),
    switchMap(({ from, to }) => this.flightService.find(from!, to!))
  );

  obs1$ = interval(800);
  obs2$ = interval(500);
  obs3$ = interval(100);

  destroy$ = new Subject<void>();

  ngOnInit() {
    this.obs1$
      .pipe(
        switchMap(() => this.obs2$),
        takeUntil(this.destroy$)
      )
      .subscribe(console.log);
    this.obs2$.pipe(takeUntil(this.destroy$)).subscribe(console.log);
    this.obs3$.pipe(takeUntil(this.destroy$)).subscribe(console.log);
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  selectedFlight?: Flight;

  basket: Record<number, boolean> = {
    2: true,
    3: true,
    5: true,
  };

  private flightService = inject(FlightService);

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
