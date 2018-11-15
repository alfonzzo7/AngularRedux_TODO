import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  textInput: FormControl;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.textInput = new FormControl('', Validators.required);
  }

  agregarTodo() {
    if (!this.textInput.valid) {
      return;
    }

    const accion = new todoActions.AgregarTodoAction(this.textInput.value);

    this.store.dispatch(accion);

    this.textInput.setValue('');
  }

}
