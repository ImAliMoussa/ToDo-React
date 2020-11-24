import React, {useState} from 'react';
import {ReactComponent as AddLogo} from "bootstrap-icons/icons/card-list.svg";
import {createNewToDoList} from "../../firebase/firebaseCreateNewToDoList";

const ToDoListCreator = () => {
    const [title, setTitle] = useState("");

    const onChange = (e) => {
        console.log(e);
        setTitle(e.target.value);
    }

    const userCreatedNewToDoList = () => {
        createNewToDoList(title);
        setTitle("");
    }

    return (
        <div className="col-10 col-md-6 bg-light dim-hover-focus d-flex p-2 rounded mx-auto border-success">
            <div className="input-group">
                <input type="text" className="form-control no-outline border-bottom-focus bg-transparent"
                       aria-label="Text input with checkbox" name="val" value={title} placeholder="Enter New To Do List Title" onChange={onChange}/>
            </div>
            <div className="ml-auto pl-2 d-flex">
                <button className="border-0 btn-transition btn btn-outline-success" onClick={userCreatedNewToDoList}>
                    <AddLogo />
                </button>
            </div>
        </div>
    );
};

export default ToDoListCreator;