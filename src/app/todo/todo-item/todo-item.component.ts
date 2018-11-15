import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditarTodoAction, EliminarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  checkField: FormControl;
  textInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.textInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar(estado) {
    this.editando = estado;

    if (estado) {
      setTimeout(() => {
        this.txtInputFisico.nativeElement.select();
      }, 1);
    } else {
      if (!this.textInput.valid || this.textInput.value === this.todo.texto) {
        return;
      }

      const accion = new EditarTodoAction(this.todo.id, this.textInput.value);
      this.store.dispatch(accion);
    }
  }

  eliminarTodo() {
    const accion = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
