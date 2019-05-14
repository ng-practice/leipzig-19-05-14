import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';

@NgModule({
  declarations: [TodoComponent, TodosComponent, TodoQuickAddComponent],
  exports: [TodoComponent, TodosComponent],
  imports: [CommonModule, FormsModule]
})
export class TodosModule {}
