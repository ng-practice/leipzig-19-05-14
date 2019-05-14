import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodoComponent, TodosComponent],
  exports: [TodoComponent, TodosComponent],
  imports: [CommonModule]
})
export class TodosModule {}
