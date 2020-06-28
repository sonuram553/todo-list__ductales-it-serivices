import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Todo } from 'src/app/shared/types';
import { MatCheckbox } from '@angular/material/checkbox';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListItemComponent implements OnInit, AfterViewInit {
  @ViewChild('checkbox', { static: false }) checkbox: MatCheckbox;

  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.checkbox.change.pipe(debounceTime(50)).subscribe(({ checked }) => {
      console.log(checked);
    });
  }
}
