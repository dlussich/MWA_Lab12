import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Diego';

  public outputFromOutside;


  constructor(){}

  showOutput(event){
     this.outputFromOutside=event;
  }


}
