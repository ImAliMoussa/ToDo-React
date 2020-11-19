import React from 'react';
import './todo-header.styles.scss';

const ToDoHeader = () => {
    return (
        <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i
                className="fa fa-tasks"/>&nbsp;Task Lists
            </div>
        </div>
    );
};

export default ToDoHeader;