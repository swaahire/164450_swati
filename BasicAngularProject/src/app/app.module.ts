import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BindingComponentComponent } from './binding-component/binding-component.component';
import { CalcComponentComponent } from './calc-component/calc-component.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
   StudentComponent,
    BindingComponentComponent,
    CalcComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
