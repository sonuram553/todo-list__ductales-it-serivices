import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/shared/types';

@Component({
  selector: 'app-done-todo-list',
  templateUrl: './done-todo-list.component.html',
  styleUrls: ['./done-todo-list.component.scss'],
})
export class DoneTodoListComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit(): void {}
}
