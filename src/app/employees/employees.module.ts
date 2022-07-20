import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    EmployeesHomeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  exports: []
})
export class EmployeesModule { }
