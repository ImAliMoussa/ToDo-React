import React from 'react';
import './todo-header.styles.scss';
import {ReactComponent as Plus} from "bootstrap-icons/icons/plus.svg";
import {ReactComponent as Checklist} from "bootstrap-icons/icons/card-checklist.svg";
import {addToDo} from "../../firebase/firebaseinit";
import {createNewToDoList} from "../../firebase/firebaseCreateNewToDoList";

const ToDoHeader = ({collectionUUID, selectNewToDoList}) => {
    const onClick = async () => {
        console.log("what the fukkkkkk");
        const newCollectionUUID = await createNewToDoList();

        console.log({newCollectionUUID});
        selectNewToDoList(newCollectionUUID);
    };
    return (
        <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i
                className="fa fa-tasks"/>&nbsp;Task Lists
            </div>
            <div className="d-inline-block ml-auto mr-2">
                <button onClick={onClick} className="border-0 btn-transition btn btn-outline-success">
                    <Checklist height={"1rem"} width={"1rem"} className="p-0 m-0"/>
                </button>

                <button onClick={() => addToDo(collectionUUID)} className="border-0 btn-transition btn btn-outline-success">
                    <Plus height={"1rem"} width={"1rem"} className="p-0 m-0"/>
                </button>
            </div>
        </div>
    );
};

export default ToDoHeader;