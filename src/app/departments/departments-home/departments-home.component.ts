import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departments-home',
  templateUrl: './departments-home.component.html',
  styleUrls: ['./departments-home.component.css']
})
export class DepartmentsHomeComponent implements OnInit {
  deps = [
    {
      name: 'Audit',
      abb: 'ADT'
    },
    {
      name: 'Development',
      abb: 'DEV'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
