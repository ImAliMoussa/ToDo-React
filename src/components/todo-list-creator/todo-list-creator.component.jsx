import React, {useState} from 'react';
import {ReactComponent as AddLogo} from "bootstrap-icons/icons/plus.svg";
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
        // if user pressexd enter to do list is created
        if (e.type === "keydown" && e.keyCode !== ENTER_KEY) return;
        createNewToDoList(title);
        setTitle("");
    }

    return (
        <div className="col-10 col-md-6 col-lg-4 shadow-sm dim-hover-focus d-flex p-2 rounded mx-auto small-outline">
            <div className="input-group">
                <input type="text" className="form-control no-outline border-bottom-focus bg-transparent"
                       autoComplete="off"
                       aria-label="Text input with checkbox" name="val" value={title}
                       placeholder="Create a new list" onChange={onChange} onKeyDown={userCreatedNewToDoList}/>
            </div>
            <div className="ml-auto pl-2 d-flex" onClick={userCreatedNewToDoList}>
                <button className="border-0 btn-transition btn btn-outline-success px-2">
                    <AddLogo name="creator" style={{width: "1.5rem", height: "1.5rem"}}/>
                </button>
            </div>
        </div>
    );
};

export default ToDoListCreator;