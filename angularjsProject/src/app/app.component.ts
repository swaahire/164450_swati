import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
      template: `
      <ul>
      <hr>
      <li>
      <a [routerLink]="['/']">Home</a>
      </li>
      <li>
      <a [routerLink]="['/add-user']">Add User</a>
      </li>
     <router-outlet></router-outlet>`
      })  
    
export class AppComponent {
  title = 'AngularjsProject';

 
}
