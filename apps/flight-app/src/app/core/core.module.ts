import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [NavbarComponent, SidebarComponent],
  exports: [HttpClientModule, NavbarComponent, SidebarComponent],
})
export class CoreModule {}
