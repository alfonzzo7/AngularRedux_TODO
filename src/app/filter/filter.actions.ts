import { Action } from '@ngrx/store';

export const SET_FILTRO = '[Filter] Set Filtro';

export type filtrosValidos = 'todas' | 'completadas' | 'pendientes';

export class SetFiltroAction implements Action {

    readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos) {}

}

export type Acciones = SetFiltroAction;
