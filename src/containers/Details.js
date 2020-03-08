import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import '../styles/Details.css';
import { Link } from 'react-router-dom';

import * as tasksActions from '../actions/tasksActions';

const Details = (props) => {
    let { task } = useParams();

    useEffect( () => {
        props.traerTask(task);
    
    }, [props, task]);

    const [ modifyNotes, setModifyNotes ] = React.useState({
        "notes": ""
    });

    function handleChange(e) {
        setModifyNotes({
            "notes": e.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.editTasks(modifyNotes, task);  
        setTimeout(function(){ props.traerTask(task); }, 400); 
    }


    console.log(modifyNotes);
    

    return (
        
        <>  
            {props.task && (
                
                    <section className="Details">
                        <div className="Circle">
                            <Link className="Details__link" to={'/'}>
                                <p>x</p>
                            </Link>
                        </div>
                        <h1 className="Details__task">{props.task.text}</h1>
                        {props.task.notes &&(
                            <h1 className="Lacking__notes">{props.task.notes}</h1>
                        )}

                        {props.task.notes === '' &&(
                            <h1 className="Lacking__text">No hay detalles para mostrar</h1>
                        )}
                        
                        <div className="Details__form">
                            <form className="Input__container" onSubmit={handleSubmit}>
                                <input 
                                className="Content__input"
                                onChange={handleChange}
                                type="text" 
                                placeholder="Ingresa o modifica detalles de tu tarea"
                                />
                                <button 
                                type="submit"
                                className='Content__button Show'>Añadir notas</button>
                            </form>  
                        </div>
                        
                    </section>
                                  
            )}   
                   
        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
}

export default connect(mapStateToProps, tasksActions)(Details);