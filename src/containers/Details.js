import React from 'react';
import { connect } from 'react-redux';

const Details = (props) => {
    return (
        <>  
            <div>Page in process</div>
        </>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.tasksReducer;
}

export default connect(mapStateToProps)(Details);