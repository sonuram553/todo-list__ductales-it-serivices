import { Injectable } from '@angular/core';
import { Todo } from '../shared/types';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoService {
  private todos: Todo[] = [
    {
      title: 'hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      repeating_task: 'no',
      completed: null,
    },
    /*  {
      title: 'hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      repeating_task: 'no',
      completed: null,
    },
    {
      title: 'hello',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      repeating_task: 'no',
      completed: null,
    }, */
  ];

  todos$ = new BehaviorSubject<Todo[]>(this.todos);

  constructor() {}

  private emitTodos() {
    this.todos$.next(this.todos);
  }

  addTodo(newTodo: Todo) {
    this.todos = [...this.todos, { ...newTodo }];
    this.emitTodos();
  }
}
