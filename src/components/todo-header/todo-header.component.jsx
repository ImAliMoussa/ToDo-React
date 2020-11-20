import React from 'react';
import './todo-header.styles.scss';
import {ReactComponent as Plus} from "bootstrap-icons/icons/plus.svg";
import {addToDo} from "../../firebase/firebaseinit";

const ToDoHeader = () => {
    const addNewTodDo = () => {
        addToDo();
    };
    return (
        <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i
                className="fa fa-tasks"/>&nbsp;Task Lists
            </div>
            <div className="d-inline-block ml-auto mr-2">
            <button onClick={addNewTodDo} className="border-0 btn-transition btn btn-outline-success">
                <Plus height={"1rem"} width={"1rem"} className="p-0 m-0"/>
            </button>
            </div>
        </div>
    );
};

export default ToDoHeader;