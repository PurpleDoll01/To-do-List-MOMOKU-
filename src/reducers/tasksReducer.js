import { TRAER_TODOS } from '../types/tasksTypes';

const INITIAL_STATE = { tasks: [{'task': 'Comer chocolate'}]};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {
                ...state,
                tasks: [...state.tasks, {'task': action.payload}]
            }

        default: return state;
    }
}

