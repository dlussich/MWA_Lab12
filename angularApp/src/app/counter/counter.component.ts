import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<button (click)="decrease()"> - </button>
            <label>{{counterValue}}</label>
            <button (click)="increase()"> + </button>`
//  templateUrl: './counter.component.html',
 // styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
   private counterValue;
   @Input() counter;
   @Output() onChange: EventEmitter<number>;
  constructor() {
    this.onChange=new EventEmitter();
    
  }
   changeValue(){
     this.onChange.emit(this.counterValue);
   }
  ngOnInit() {
        this.counterValue=this.counter | 0;
        this.onChange.emit(this.counterValue); 
  }

  increase(){
    
    this.counterValue++;
    this.changeValue()
  }
  decrease(){
    this.counterValue--;
     this.changeValue()
  }

}
