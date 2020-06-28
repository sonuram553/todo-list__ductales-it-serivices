import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Todo } from '../shared/types';
import { CreateTodoService } from './create-todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTodoComponent implements OnInit {
  todoForm: FormGroup;
  todos: Todo[];

  constructor(
    private fb: FormBuilder,
    private createTodoService: CreateTodoService
  ) {}

  ngOnInit(): void {
    this.createTodoService.todos$.subscribe((todos) => (this.todos = todos));
    this.createTodoForm();
    this.todoForm.statusChanges
      .pipe(debounceTime(700))
      .subscribe(this.onStatusChange);
  }

  createTodoForm() {
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      repeating_task: [''],
    });
  }

  onStatusChange = (value) => {
    if (value === 'INVALID') return;
    //this.todos.push({ ...this.todoForm.value, completed: null });
    //this.todos = [...this.todos, { ...this.todoForm.value, completed: null }];
    this.createTodoService.addTodo({ ...this.todoForm.value, completed: null });
    this.todoForm.reset();
  };
}
