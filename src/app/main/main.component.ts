import { Component } from '@angular/core';

interface Card {
  title: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public count = 0;
  public cards: Card[] = [];

  public addCard() {
    this.cards.push({ title: `Card Title ${++this.count}`});
  }
}
