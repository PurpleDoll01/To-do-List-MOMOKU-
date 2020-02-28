import { TRAER_TODOS, ADDED} from '../types/tasksTypes';

const INITIAL_STATE = { tasks: []};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return { 'tasks': action.payload}

        case ADDED:
            return state;

        default: return state;
    }
}

