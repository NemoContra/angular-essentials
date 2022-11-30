import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsyncCityPipe } from './async-city.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [AsyncCityPipe],
  exports: [FormsModule, AsyncCityPipe],
})
export class SharedModule {}
