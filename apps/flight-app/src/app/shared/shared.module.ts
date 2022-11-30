import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncCityPipe } from './async-city.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [AsyncCityPipe],
  exports: [FormsModule, ReactiveFormsModule, AsyncCityPipe],
})
export class SharedModule {}
