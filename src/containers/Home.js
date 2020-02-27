import React from 'react';
import '../styles/Home.css';
import { connect } from 'react-redux';
import List from '../components/List';
import { Link } from 'react-router-dom';

import * as tasksActions from '../actions/tasksActions';

const Home = (props) => {
    
    function handleSubmit(event) {
        event.preventDefault()
        props.traerTasks('Datos');
        console.log(event.target.value);
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

            
                <section className="List">
                {props.tasks.map(data => (
                    <Link className="List__link" to={`/details/${data.task}`} key={data.task}>
                        <List 
                        data={data}
                        key={data.task}
                    /> 
                    </Link> 
                ))}
            </section>

        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
};

export default connect(mapStateToProps, tasksActions)(Home);