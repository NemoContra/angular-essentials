import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CityPipe],
  exports: [FormsModule, ReactiveFormsModule, CityPipe],
})
export class SharedModule {}
