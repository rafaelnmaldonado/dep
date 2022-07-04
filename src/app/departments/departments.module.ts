import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsHomeComponent } from './departments-home/departments-home.component';


@NgModule({
  declarations: [
    DepartmentsHomeComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ],
  exports: []
})
export class DepartmentsModule { }
