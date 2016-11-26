import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  heading = 'Before click';
  list: string[] = [];
  doCheckFires = 0;
  counter = 0;

  ngDoCheck() {
    ++this.doCheckFires;
  }

  click(): void {
    this.counter++;
    this.heading = 'After click';
    this.list = [ 'Label 1', 'Label 2', 'Label 3' ];
  }
}
