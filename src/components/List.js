import React from 'react';
import '../styles/List.css';
import { Link } from 'react-router-dom';

const List = (props) => {
    return (
        <>  
            <div className="List__container">
                <div className="Checkbox__container">
                    <input className="List__checkbox" type="checkbox" /> 
                    <Link className="List__link" to={`/details/${props.data.task}`} key={props.data.task}>
                        <label className="Checkbox__label">{props.data.task} </label>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default List;

