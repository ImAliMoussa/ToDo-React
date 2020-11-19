import React from 'react';
import './todo-footer.styles.scss';

const ToDoFooter = () => {
    return (
        <div className="d-block text-right card-footer">
            <button className="mr-2 btn btn-sm btn-link btn-sm">Cancel</button>
            <button className="btn btn-primary">Add Task</button>
        </div>
    );
}

export default ToDoFooter;