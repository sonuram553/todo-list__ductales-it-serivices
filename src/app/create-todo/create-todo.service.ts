import { Injectable } from '@angular/core';
import { Todo } from '../shared/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoService {
  private count = 0;
  private todos: Todo[] = [
    {
      id: 100,
      title: 'hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      repeating_task: 'no',
      completed: null,
    },
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  private emitTodos() {
    this.todos$.next(this.todos);
  }

  addTodo(newTodo: Todo) {
    this.todos = [...this.todos, { ...newTodo, id: this.count }];
    this.count++;
    this.emitTodos();
  }

  changeTodoStatus(id: number, status: boolean) {
    const index = this.todos.findIndex((todo) => id === todo.id);
    this.todos = [
      ...this.todos.slice(0, index),
      { ...this.todos[index], completed: status },
      ...this.todos.slice(index + 1),
    ];
    this.emitTodos();
  }
}
