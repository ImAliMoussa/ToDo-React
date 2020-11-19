import React from 'react';
import './todo-list.styles.scss';
import ToDoHeader from "../todo-header/todo-header.component";
import ToDoFooter from "../todo-footer/todo-footer.component";
import ToDoListItem from "../todo-list-item/todo-list-item.component";

const TodoList = () => {
    return (
        <div className="row d-flex justify-content-center container">
            <div className="col-md-8">
                <div className="card-hover-shadow-2x mb-3 card">
                    <ToDoHeader/>
                    <div className="scroll-area-sm">
                        <ul className=" list-group list-group-flush">
                            <ToDoListItem/>
                        </ul>
                    </div>
                    <ToDoFooter/>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
