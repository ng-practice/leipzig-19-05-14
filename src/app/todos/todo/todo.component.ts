import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  // [todo]="todo"
  @Input() todo: Todo;
  // (update)="fn($event)"
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  emitUpdate(todo: Todo) {
    this.update.emit(todo);
  }

  emitDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
