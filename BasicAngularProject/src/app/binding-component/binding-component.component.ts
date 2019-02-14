import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-component',
  templateUrl: './binding-component.component.html',
  styleUrls: ['./binding-component.component.css']
})
export class BindingComponentComponent implements OnInit {
name:string="Swati";
welcomeText:string="Welcome Swati";
	    showdiv = false;  
    togglevisibilty(): void {  
          this.showdiv = !this.showdiv;  
          console.log(this.showdiv);
	    }  

  constructor() { }

  ngOnInit() { }
  // onTest() {  
  //           return true;  
  //       }  
    

}
