import React from 'react';
import '../styles/List.css';

const List = (props) => {
    return (
        <>  
            <div className="List__container">
                <div className="Checkbox__container">
                    <input className="List__checkbox" type="checkbox" /> 
                    <label className="Checkbox__label">{props.data.task} </label>
                </div>
            </div>
        </>
    )
}

export default List;

