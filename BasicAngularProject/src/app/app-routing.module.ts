import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {BindingComponentComponent} from './binding-component/binding-component.component'
import {CalcComponentComponent} from './calc-component/calc-component.component'
import {LoginComponent} from './login/login.component'
import { from } from 'rxjs';

const routes: Routes = [
   { path : "1", component : StudentComponent},  
   { path: "2", component: BindingComponentComponent},
   { path: "3", component: CalcComponentComponent},
   { path: "4", component: LoginComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
