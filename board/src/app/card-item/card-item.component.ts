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

  public isOpen: boolean = false;
  public color: string;

  public onRemove() {
    this.removeCard.emit(this.card);
  }

  toggleDescription() {
    this.isOpen = !this.isOpen;
  }
}
