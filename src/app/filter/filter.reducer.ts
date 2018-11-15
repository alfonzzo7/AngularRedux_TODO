import * as filterActions from './filter.actions';

const estadoInicial: filterActions.filtrosValidos = 'todas';

export function filterReducer(state = estadoInicial, action: filterActions.Acciones): filterActions.filtrosValidos {
    switch (action.type) {
        case filterActions.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}
