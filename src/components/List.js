import React from 'react';
import '../styles/List.css';
import { Link } from 'react-router-dom';

const List = (props) => {
    console.log(props.data.text)
    return (
        <>  
            <div className="List__container">
                <div className="Checkbox__container">
                    <input className="List__checkbox" type="checkbox" /> 
                    <Link className="List__link" to={`/details/${props.data.text}`} key={props.data.id}>
                        <label className="Checkbox__label">{props.data.text} </label>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default List;

