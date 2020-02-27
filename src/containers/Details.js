import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import '../styles/Details.css';
import { Link } from 'react-router-dom';

const Details = (props) => {
    let { task } = useParams();

    return (
        <>  
            <section className="Details">
                <div className="Circle">
                    <Link className="Details__link" to={'/'}>
                        <p>x</p>
                    </Link>
                </div>
                <h1 className="Details__task">{task}</h1>
            </section>
        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
}

export default connect(mapStateToProps)(Details);