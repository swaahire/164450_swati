import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  title = 'BasicAngularProject';
  name:string="Swati";
 pageheader:string="Student Detail";
FirstName:string='Swati';
LastName:string="Ahire";
Qualification:string="B.E";
Profession:string="Software Developer";
  constructor() { }

  ngOnInit() {
  }

}
