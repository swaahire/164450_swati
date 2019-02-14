import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
    location : Address = {
     "street" : "M.G.Road",
     "city" : "Mumbai"
   };
  constructor() {
    this.name='Swati'
   }
   
  ngOnInit() {
    
  }
}
class Address {
    street : string;
    city : string;
}

