import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";
import {Todo} from "./models/Todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    })
  }

  createTodo(title: string) {
    this.todoService.createTodo(title).subscribe((todo) => {
      this.todos = [...this.todos, todo];
    });
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id).subscribe(() => {
      this.todos = this.todos.filter(t => t.id != todo.id);
    });
  }

  toggleTodo(todo: Todo) {
    this.todoService.toggleTodo(todo.id).subscribe((t: Todo) => {
      const index = this.todos.indexOf(todo)
      this.todos[index] = t;
      console.log(this.todos)
      this.todos = [...this.todos];
    })
  }

}
