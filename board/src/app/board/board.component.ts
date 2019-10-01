import { Component, OnInit, Input } from '@angular/core';
import { CardList } from '../models/CardList';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() public searchCriterion: string;

  public removeItem(item: any) {
    console.log(item);
  }

  public cardList: CardList[] = [
    {
      id: '1',
      name: 'First',
      isDoneSection: false,
      cards: [
        {
          id: '2',
          name: 'Task 1',
          description: 'Description 1',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '3',
            firstName: 'Ivan',
            lastName: 'Ivanov'
          }
        },
        {
          id: '4',
          name: 'Task 2',
          description: 'Description 2',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '5',
            firstName: 'Pet',
            lastName: 'Sidorov'
          }
        },
        {
          id: '6',
          name: 'Task 3',
          description: 'Description 3',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '7',
            firstName: 'Grisha',
            lastName: 'Lupkin'
          }
        },
      ]
    },
    {
      id: '2',
      name: 'Second',
      isDoneSection: false,
      cards: [
        {
          id: '1',
          name: 'In Progress 1',
          description: 'Description 1',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '9',
            firstName: 'Worse',
            lastName: 'Better'
          }
        },
        {
          id: '2',
          name: 'In Progress 2',
          description: 'Description 2',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '10',
            firstName: 'Good',
            lastName: 'Well'
          }
        },
        {
          id: '3',
          name: 'In Progress 3',
          description: 'Description 3',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '11',
            firstName: 'Sad',
            lastName: 'Sad'
          }
        },
      ]
    },
    {
      id: '3',
      name: 'Done',
      isDoneSection: true,
      cards: [
        {
          id: '1',
          name: 'Done 1',
          description: 'Description 1',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '10',
            firstName: 'Bad',
            lastName: 'News'
          }
        },
        {
          id: '2',
          name: 'Done 2',
          description: 'Description 2',
          dueDate: new Date().toISOString(),
          assignee: {
            id: '11',
            firstName: 'Good',
            lastName: 'News'
          }
        },
      ]
    },
  ]

}
