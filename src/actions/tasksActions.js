import { TRAER_TODOS } from '../types/tasksTypes';

export const traerTasks= (data) => async (dispatch) => {
    dispatch({
        type: TRAER_TODOS,
        payload: data
    });

}

