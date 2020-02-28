import { TRAER_TODOS, ADDED } from '../types/tasksTypes';
import axios from 'axios';

export const traerTasks = () => async (dispatch) => {
    dispatch({
        type: 'CARGANDO'
    });
    try {
        const respuesta = await axios.get('https://monoku-tasks.herokuapp.com/R1OvSQOyETZseTHSEw3E/all');
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
        const respuesta = await axios({
            method: 'post',
            url: 'https://monoku-tasks.herokuapp.com/R1OvSQOyETZseTHSEw3E/add',
            data: data
          });

        dispatch({
           type: ADDED
        })                      
    } catch(error) {
        console.log(`Error: ${error.message}`)
        dispatch({
            type: 'ERROR',
            payload: 'Algo salió mal, intenta después' 
        })
    }
}

