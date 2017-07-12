import { Directive,Output, ElementRef, Renderer, HostListener,EventEmitter } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {

  @HostListener('click') onClick(){
     this.color= this.colors[Math.floor(Math.random() * this.colors.length)];
     this.renderer.setElementStyle(this.e.nativeElement,'color',this.color);
     this.colorProp.emit(this.color);
  }
  private color;
  @Output() colorProp: EventEmitter<string>;;

  private colors:string[]=['yellow','green','red','blue'];
  constructor(private e:ElementRef, 
              private renderer:Renderer) { 
    this.colorProp=new EventEmitter();
  }



}
