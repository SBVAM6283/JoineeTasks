import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  // template:`
  
  // `,
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  
  buttons:string[]=['1','2','3','4','5','6','7','8','9','0','=','+']

  result:string='';
  
  @Output() public childEvent=new EventEmitter()
  @Output() public childEvent2=new EventEmitter()

  private preValue: string='';
  private curValue:string='';

  addToExpression(value:string){
    if(this.result!=''){
      this.preValue=this.curValue;
    }
    if(value=='='){
      this.childEvent.emit(this.result=eval(this.result));
    }
    else{
      this.childEvent2.emit(this.result+=value);
    }
  }

 

}
