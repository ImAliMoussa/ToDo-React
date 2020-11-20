import React, {useState} from 'react';
import './todo-list.styles.scss';
import ToDoHeader from "../todo-header/todo-header.component";
import ToDoFooter from "../todo-footer/todo-footer.component";
import ToDoListItem from "../todo-list-item/todo-list-item.component";

const TodoList = ({todos}) => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card">
                        <ToDoHeader />
                        <div className="scroll-area-sm">
                            <ul className=" list-group list-group-flush">
                                {
                                    todos.length > 0 ? (todos.map(todo => <ToDoListItem  key={todo.id} todoContent={todo.data.val}/>)) : null
                                }
                            </ul>
                        </div>
                        <ToDoFooter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoList;
