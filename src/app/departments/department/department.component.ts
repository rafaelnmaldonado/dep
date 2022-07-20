import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() name = '';
  @Input() abb = '';

  constructor() { }

  ngOnInit(): void {
  }

}
