import { Component } from '@angular/core';
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

  show(todo: Todo): void {
    alert(todo.text);
  }

  createTodo(todo: Todo): void {
    this.todosService.create(todo);
    this.todos = this.todosService.getAll();
  }

  deleteTodo(todo: Todo): void {
    this.todosService.delete(todo);
    this.todos = this.todosService.getAll();
  }
}
