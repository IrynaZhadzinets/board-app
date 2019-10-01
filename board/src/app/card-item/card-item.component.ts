import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardList } from '../models/CardList';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public card: Card;
  @Input() public isDone: boolean;
  @Output() public removeCard = new EventEmitter<Card>();

  private dayInMilliseconds: number = 24 * 60 * 60 * 1000;
  public isOpen: boolean = false;
  public color: string;

  ngOnChanges() {
    const differenceOfMilliseconds = Date.now() - Date.parse(String(this.card.dueDate));
    if (differenceOfMilliseconds < this.dayInMilliseconds * 3 && !this.isDone) {
      this.color = 'red';
    } else if (differenceOfMilliseconds < this.dayInMilliseconds * 7 && !this.isDone) {
      this.color = 'yellow';
    }
  }

  public onRemove() {
    this.removeCard.emit(this.card);
  }

  toggleDescription() {
    this.isOpen = !this.isOpen;
  }
}
