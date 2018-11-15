import * as todoActions from './todo.actions';
import { Todo } from './models/todo.model';

const estadoInicial: Todo[] = [];

export function todoReducer(state = estadoInicial, action: todoActions.Acciones): Todo[] {
    switch (action.type) {
        case todoActions.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

        case todoActions.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case todoActions.TOGGLE_ALL_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };
            });

        case todoActions.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });

        case todoActions.ELIMINAR_TODO:
            return state.filter(todoEdit => {
                if (todoEdit.id !== action.id) {
                    return todoEdit;
                }
            });

        case todoActions.ELIMINAR_All_TODO:
            return state.filter(todoEdit => {
                if (!todoEdit.completado) {
                    return todoEdit;
                }
            });

        default:
            return state;
    }
}
