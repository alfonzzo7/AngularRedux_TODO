import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar TODO';
export const TOGGLE_TODO = '[TODO] Toggle TODO';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All TODO';
export const EDITAR_TODO = '[TODO] Editar TODO';
export const ELIMINAR_TODO = '[TODO] Eliminar TODO';
export const ELIMINAR_All_TODO = '[TODO] Eliminar All TODO';

export class AgregarTodoAction implements Action {

    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {}

}

export class ToggleTodoAction implements Action {

    readonly type = TOGGLE_TODO;

    constructor(public id: number) {}

}

export class ToggleAllTodoAction implements Action {

    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) {}

}

export class EditarTodoAction implements Action {

    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) {}

}

export class EliminarTodoAction implements Action {

    readonly type = ELIMINAR_TODO;

    constructor(public id: number) {}

}

export class EliminarAllTodoAction implements Action {

    readonly type = ELIMINAR_All_TODO;

}

export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       ToggleAllTodoAction |
                       EditarTodoAction |
                       EliminarTodoAction |
                       EliminarAllTodoAction;
