import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  pagetitle: string="Employee Details";
  employees: IEmployee[]=[
    {
    "empId": "E001",
    "name": "swati",
    "email": "swati002gamil.com",
    "phone": "1245478796633",
    "salary": 50000,
    "appraisalRating": 4
  },
  {
    "empId": "E002",
    "name": "priti",
    "email": "priti9999@gamil.com",
    "phone": "541124224332",
    "salary": 455221,
    "appraisalRating": 4
  }
]

  constructor() { }

  ngOnInit() {
  }

}
