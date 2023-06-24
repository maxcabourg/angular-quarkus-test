import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent {

  @Output() formSubmit = new EventEmitter<string>();
  title = ''

  onSubmit() {
    this.formSubmit.emit(this.title);
    this.title = '';
  }
}
