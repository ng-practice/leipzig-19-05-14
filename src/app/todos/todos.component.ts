import { Component, OnInit } from '@angular/core';
import { Todo } from './models';
import { TodosService } from './lib/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[];

  constructor(private todosService: TodosService) {
    this.todos = this.todosService.getAll();
  }

  show(todo) {
    alert(todo.text);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.text !== todo.text);
  }
}
