import React, {useState} from 'react';
import {ReactComponent as AddLogo} from "bootstrap-icons/icons/card-list.svg";
import {createNewToDoList} from "../../firebase/firebaseCreateNewToDoList";

const ToDoListCreator = () => {
    const [title, setTitle] = useState("");
    const ENTER_KEY = 13;

    const onChange = (e) => {
        console.log(e);
        setTitle(e.target.value);
        if (e.keyCode === 13) {
            userCreatedNewToDoList();
        }
    }

    const userCreatedNewToDoList = (e) => {
        // if user pressed enter to do list is created
        if (e.keyCode === ENTER_KEY) {
            createNewToDoList(title);
            setTitle("");
        }
    }

    return (
        <div className="col-10 col-md-6 col-lg-4 shadow-sm dim-hover-focus d-flex p-2 rounded mx-auto small-outline">
            <div className="input-group">
                <input type="text" className="form-control no-outline border-bottom-focus bg-transparent"
                       autoComplete="off"
                       aria-label="Text input with checkbox" name="val" value={title}
                       placeholder="Enter New To Do List Title" onChange={onChange} onKeyDown={userCreatedNewToDoList}/>
            </div>
            <div className="ml-auto pl-2 d-flex">
                <button className="border-0 btn-transition btn btn-outline-success" onClick={userCreatedNewToDoList}>
                    <AddLogo/>
                </button>
            </div>
        </div>
    );
};

export default ToDoListCreator;