import { TRAER_TODOS} from '../types/tasksTypes';

const INITIAL_STATE = { tasks: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return { 'tasks': action.payload}

        case 'CARGANDO':
                return { 'loading': 'Loading', 'tasks': [] }

        case 'CARGANDO__TASK':
                return { 'loadingTask': 'Loading', 'tasks': [] }

        default: return state;
    }
}

