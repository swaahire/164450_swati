import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pagetitle: string="Employee Details";
  employees: IEmployee[]=[
    {
    "empId": "E001",
    "name": "swati",
    "email": "swati002gmail.com",
    "phone": 1245478448,
    "salary": 50000,
    "appraisalRating": 4
  },
  {
    "empId": "E002",
    "name": "priti",
    "email": "priti9999@gmail.com",
    "phone": 5411242254,
    "salary": 455221,
    "appraisalRating": 4
  }
]
  constructor() { }

  ngOnInit() {
  }

}
