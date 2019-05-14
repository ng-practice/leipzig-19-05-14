import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from './models';
import { TodosService } from './lib/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  sink = new Subscription();
  todos: Todo[];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.sink.add(
      this.todosService.getAll().subscribe(todos => (this.todos = todos))
    );
  }

  ngOnDestroy(): void {
    this.sink.unsubscribe();
  }

  show(todo: Todo): void {
    this.sink.add(
      this.todosService.complete(todo).subscribe(() => this.getAll())
    );
  }

  createTodo(todo: Todo): void {
    this.sink.add(
      this.todosService.create(todo).subscribe(() => this.getAll())
    );
  }

  deleteTodo(todo: Todo): void {
    this.sink.add(
      this.todosService.delete(todo).subscribe(() => this.getAll())
    );
  }

  getAll(): void {
    this.sink.add(
      this.todosService.getAll().subscribe(todos => (this.todos = todos))
    );
  }
}
