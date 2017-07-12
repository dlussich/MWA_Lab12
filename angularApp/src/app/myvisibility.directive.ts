import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit{

  ngOnInit(): void {
      let show=this.myvisibility? 'block':'none';
      this.renderer.setElementStyle(this.e.nativeElement,'display',show);
  }

  @Input() myvisibility:boolean;
  constructor(private e:ElementRef, 
              private renderer:Renderer) {
  }

}
