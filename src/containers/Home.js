import React, { useEffect }  from 'react';
import '../styles/Home.css';
import { connect } from 'react-redux';
import List from '../components/List';

import * as tasksActions from '../actions/tasksActions';

const Home = (props) => {
    
    const { inputTask, setInputTask } = useData()

    function handleChange(e) {
        setInputTask({
            "checked": false,
            "notes": "",
            "text": e.target.value
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        props.postTasks(inputTask); 
        setInputTask({
            "checked": false,
            "notes": "",
            "text": ""
        }) 
        setTimeout(function(){ props.traerTasks(); }, 1000); 
        
    }

    function useData () {
        const [ inputTask, setInputTask ] = React.useState({
            "checked": false,
            "notes": "",
            "text": ""
        });
        useEffect( () => {
            props.traerTasks();
    
        }, []);

        return { inputTask, setInputTask }
    }

    return (
        <>
            <section className="Hero">
                <div 
                    className="Hero__container"
                    style={{  
                        backgroundImage: "url(" + "https://i.imgur.com/yg1IkdA.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                    <p className="Hero__date">Viernes, 6 de Diciembre</p>
                    <p className="Hero__time">10:45am</p>
                    <p className="Hero__description">¿Qué planeas hacer el día de hoy?</p>
                </div>  
            </section>

            <section className="Content">
                <div className="Content__container">
                    <p className="Content__label">Añade las tareas que deseas realizar</p>

                    <form onSubmit={handleSubmit} className="Input__container">
                        <input 
                        value={inputTask.text}
                        onChange={handleChange}
                        className="Content__input"
                        type="text" 
                        placeholder="Eje: Comprar materiales para trabajar"
                        />
                        <button 
                        type="submit"
                        className="Content__button">Añadir tarea</button>
                    </form>  
                </div>       
            </section>

            {!props.tasks.length && (
                <div className="Lacking">
                    <p className="Lacking__text" >No has añadido ninguna tarea hasta el momento</p>
                </div>
            )}
                    
            <section className="List">
                {props.tasks.map(data => (
                    <List 
                        data={data}
                        key={data.id}
                    /> 
                ))}
            </section>

        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
};

export default connect(mapStateToProps, tasksActions)(Home);