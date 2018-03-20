import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './ch1.component.html',
  styleUrls: ['./ch1.component.css']
})
export class Ch1Component implements OnInit {
@Input() childMessage: string;
  message: string = "Message is from child"
  constructor() { }

  ngOnInit() {
  }

}