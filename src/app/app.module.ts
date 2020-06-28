import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './shared/materials.module';
import { TodoListComponent } from './create-todo/todo-list/todo-list.component';
import { TodoListItemComponent } from './create-todo/todo-list/todo-list-item/todo-list-item.component';
import { DoneTodoListComponent } from './create-todo/done-todo-list/done-todo-list.component';

@NgModule({
  declarations: [AppComponent, CreateTodoComponent, TodoListComponent, TodoListItemComponent, DoneTodoListComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
