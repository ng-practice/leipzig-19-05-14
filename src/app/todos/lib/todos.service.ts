import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private endpoint = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.endpoint);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.endpoint, {
      guid: Math.random().toString(36),
      ...todo
    });
  }

  complete(todo: Todo) {
    return this.http.put(`${this.endpoint}/complete/${todo.guid}`, todo);
  }

  delete(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`${this.endpoint}/${todo.guid}`);
  }
}
