import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
     template: `<h1>Home: All Users</h1> 
     <hr>
      <ul> 
      <li>Bruce Wayne</li> 
      <li>Dick Grayson</li> 
      </ul>`
})
export class HomeUsersComponent implements OnInit {


  ngOnInit() {
  }
}

