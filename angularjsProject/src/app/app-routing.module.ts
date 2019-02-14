import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AddUsersComponent } from './component1/add-users/add-users.component';
//import { HomeUsersComponent } from './component1/home-users/home-users.component';
const routes: Routes = [
  // { path : '', component : HomeUsersComponent},  // default route
  // { path : 'add-user', component : AddUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
