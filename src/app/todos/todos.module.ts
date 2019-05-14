import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodoComponent, TodosComponent, TodoQuickAddComponent],
  exports: [TodoComponent, TodosComponent],
  imports: [CommonModule, FormsModule, HttpClientModule]
})
export class TodosModule {}
