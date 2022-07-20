import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsHomeComponent } from './departments-home/departments-home.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    DepartmentsHomeComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ],
  exports: []
})
export class DepartmentsModule { }
