import { Component, ViewChild, AfterViewInit  } from '@angular/core';

import {Ch1Component} from "./ch1/ch1.component";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    @ViewChild(Ch1Component) child;
  name = 'Angular 5';
    ngAfterViewInit() {
    this.name = this.child.message
  }
}
