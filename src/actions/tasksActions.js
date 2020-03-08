import { TRAER_TODOS} from '../types/tasksTypes';
import axios from 'axios';

export const traerTasks = () => async (dispatch) => {
    dispatch({
        type: 'CARGANDO'
    });
    try {
        const respuesta = await axios.get('https://api-todo-monoku.herokuapp.com/list');
        dispatch({
           type: TRAER_TODOS,
           payload: respuesta.data
        })                        
    } catch(error) {
        console.log(`Error: ${error.message}`)
        dispatch({
            type: 'ERROR',
            payload: 'Algo salió mal, intenta después' 
        })
    }
}

export const postTasks = (data) => async (dispatch) => {
    dispatch({
        type: 'CARGANDO'
    });
    try {
        await axios({
            method: 'post',
            url: 'https://api-todo-monoku.herokuapp.com/list',
            data: data
        });
                    
    } catch(error) {
        console.log(`Error: ${error.message}`)
        dispatch({
            type: 'ERROR',
            payload: 'Algo salió mal, intenta después' 
        })
    }
}

export const editTasks = (data, id) => async (dispatch) => {
    dispatch({
        type: 'CARGANDO_TASK'
    });
    try {
        await axios({
            method: 'patch',
            url: `https://api-todo-monoku.herokuapp.com/list/${id}`,
            data: data
        });

    } catch(error) {
        console.log(`Error: ${error.message}`)
        dispatch({
            type: 'ERROR',
            payload: 'Algo salió mal, intenta después' 
        })
    }
}

export const deleteTask = (id) => async (dispatch) => {
    dispatch({
        type: 'CARGANDO'
    });
    try {
        await axios({
            method: 'delete',
            url: `https://api-todo-monoku.herokuapp.com/list/${id}`
        });
        const respuesta = await axios.get('https://api-todo-monoku.herokuapp.com/list');
        dispatch({
           type: TRAER_TODOS,
           payload: respuesta.data
        }) 

    } catch(error) {
        console.log(`Error: ${error.message}`)
        dispatch({
            type: 'ERROR',
            payload: 'Algo salió mal, intenta después' 
        })
    }
}

