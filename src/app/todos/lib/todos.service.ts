import { Injectable } from '@angular/core';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [
    {
      text: 'Prepare 1st Workshop',
      isComplete: true,
      createdAt: new Date()
    },
    {
      text: 'Prepare 2st Workshop',
      isComplete: false
    },
    {
      text: 'Prepare 3st Workshop',
      isComplete: true
    },
    {
      text: 'Prepare 4st Workshop',
      isComplete: false
    }
  ];

  getAll(): Todo[] {
    return this.todos;
  }
}
