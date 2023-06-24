import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Array<Todo>>('/api/todos');
  }

  createTodo(title: string) {
    return this.http.post<Todo>('/api/todos', { title });
  }

  deleteTodo(id: number) {
    return this.http.delete(  `/api/todos/${id}`)
  }

  toggleTodo(id: number) {
    return this.http.put<Todo>(`/api/todos/${id}/toggle`, null);
  }

}
