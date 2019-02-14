import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-component',
  templateUrl: './calc-component.component.html',
  styleUrls: ['./calc-component.component.css']
})
export class CalcComponentComponent implements OnInit {
number1: number=0;
number2: number=0;
Answer: number;
Answer1: number;
Answer2: number;
Answer3: number;

  constructor() { }
add(){
  this.Answer=this.number1+this.number2;
}
sub(){
  this.Answer1=this.number1-this.number2;
}
mul(){
  this.Answer2=this.number1*this.number2;
}
div(){
  this.Answer3=this.number1/this.number2;
}
  ngOnInit() {
  }

}
