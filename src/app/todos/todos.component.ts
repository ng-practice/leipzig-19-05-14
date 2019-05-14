import { Component, OnInit } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
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

  show(todo) {
    alert(todo.text);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.text !== todo.text);
  }
}
