import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent {
  @Output() create = new EventEmitter<Todo>();

  emitCreate(textControl: HTMLInputElement) {
    this.create.emit({
      text: textControl.value,
      isComplete: false
    });
  }
}
