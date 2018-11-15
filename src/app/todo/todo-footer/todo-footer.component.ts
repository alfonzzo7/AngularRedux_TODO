import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFiltroAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';
import { EliminarAllTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: filtrosValidos[] = ['todas', 'completadas', 'pendientes'];
  filtroActual: filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    const accion = new SetFiltroAction(filtro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletadas() {
    const accion = new EliminarAllTodoAction();
    this.store.dispatch(accion);
  }

}
