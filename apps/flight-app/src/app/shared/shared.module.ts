import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityPipe } from './city.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CityPipe],
  exports: [FormsModule, CityPipe],
})
export class SharedModule {}
