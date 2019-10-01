import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardList } from '../models/CardList';
import { Card } from '../models/Card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public cardList: CardList;
  @Input() public searchCriterion: string;
  @Output() removeCard = new EventEmitter<Card>();

  public id: string;
  public name: string;

   public removeItem(item: any) {
    const index = this.cardList.cards.findIndex(existingItem => existingItem.id === item.id);
    this.removeCard.emit(...this.cardList.cards.splice(index, 1));
  }
}
