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
    this.todosService.getAll().subscribe(todos => (this.todos = todos));
  }

  show(todo: Todo): void {
    alert(todo.text);
  }

  createTodo(todo: Todo): void {
    this.todosService.create(todo).subscribe(() => this.getAll());
  }

  deleteTodo(todo: Todo): void {
    this.todosService.delete(todo).subscribe(() => this.getAll());
  }

  getAll(): void {
    this.todosService.getAll().subscribe(todos => (this.todos = todos));
  }
}
