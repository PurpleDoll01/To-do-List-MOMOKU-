import React, { useEffect } from 'react';
import '../styles/List.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as tasksActions from '../actions/tasksActions';

const List = (props) => {

    let isChecked = props.data.checked;

    const [ className, setClassName ] = React.useState('Checkbox__label');

    function handleClick() {
        if(isChecked === true) {
            isChecked = 'false';
        } else {
            isChecked = true;
        }
        props.editTasks({checked: isChecked}, props.data._id);
        //Esto puede cambiar por un login mientras envía a base de datos
        setTimeout(function(){ props.traerTasks(); }, 400);

        
    }

    function handleRemove() {
        console.log('Me eliminan');
        props.deleteTask(props.data._id)
    }

    /* ****Aquí se tachan los tasks que en la DB tengan true el checked *** */
    useEffect( () => {
        if (props.data.checked === true) {
            setClassName('Checkbox__label Checked');
        }
    }, [isChecked]);
    
    return (
        <>  
            <div className="List__container">
                <div className="Checkbox__container">
                    <div className="Division1__container">
                        <input className="List__checkbox" type="checkbox" onChange={handleClick} /> 
                        <Link className="List__link" to={`/details/${props.data.text}`} key={props.data._id}>
                            <label className={className}>{props.data.text} </label>
                        </Link>   
                    </div>
                    <div className="Division2__container">
                        <img src="" alt="Borrar" onClick={handleRemove} className="Checkbox__image"/>
                    </div>
                </div>
            </div>
        </>
    )

}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
};

export default connect(mapStateToProps, tasksActions)(List);

