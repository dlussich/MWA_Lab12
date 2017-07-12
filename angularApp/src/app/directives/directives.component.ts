import { Component,OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-directives',
  template:`<ul>
                <li *ngFor="let d of data" appUpper>{{d}}</li>
            </ul>
            <h1 (colorProp)="showColor($event)" mycolor> Click here to change the color of this text </h1>
           <h2>Selected color is: {{color}}</h2>
            `
 // templateUrl: './directives.component.html',
  //styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  constructor() { }
  @Input() data:string[];
  
  private color:string;

  ngOnInit() {
  }

  showColor(event){
    this.color=event;
  }

}
