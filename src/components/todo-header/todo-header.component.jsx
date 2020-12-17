import React from 'react';
import './todo-header.styles.scss';
import {ReactComponent as Plus} from "bootstrap-icons/icons/plus.svg";
import {addToDo} from "../../firebase/firebaseinit";

const ToDoHeader = ({collectionUUID, title}) => {
    return (
        <div className="card-header-tab card-header">
            <div className="d-inline-block card-header-title font-size-lg text-capitalize font-weight-normal hidden-text-custom">{title}
            </div>
            <div className="d-inline-block ml-auto mr-2">
                <button onClick={() => addToDo(collectionUUID)}
                        className="border-0 btn-transition btn btn-outline-success">
                    <Plus height={"1rem"} width={"1rem"} className="p-0 m-0"/>
                </button>
            </div>
        </div>
    );
};

export default ToDoHeader;