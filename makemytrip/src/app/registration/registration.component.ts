import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupportService } from '../SupportService'
import { from } from 'rxjs';
import { UserModule } from '../user/user.module';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    // userList: User[]=[];
   heading ='Registration-Form';
   form: FormGroup;
   user:UserModule=new UserModule();
   constructor(private fb: FormBuilder,private userService: SupportService,private router: Router) { }
   Submit(form): void {
   
  console.log("in register() method")
  this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new UserModule();
    this.router.navigateByUrl('home');
   }   
  
 

  ngOnInit() {
    this.form = new FormGroup({
     userName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z]+'),Validators.minLength(3)]),
     password: new FormControl('',[Validators.required,Validators.pattern(''),Validators.minLength(8)]),
     confirmPassword: new FormControl('',[Validators.required,Validators.pattern(''),Validators.minLength(8)]),
     emailId: new FormControl('',[Validators.required,Validators.email]),
     contactNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)])
    });
  }

}
