import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  // [todo]="todo"
  @Input() todo;
  // (update)="fn($event)"
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();

  emitUpdate(todo) {
    this.update.emit(todo);
  }

  emitDelete(todo) {
    this.delete.emit(todo);
  }
}
