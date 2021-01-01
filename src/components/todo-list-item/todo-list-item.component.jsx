import React, {useState , useEffect} from 'react';
import './todo-list-item.styles.scss';
import Textarea from 'react-expanding-textarea';
import { ReactComponent as Trash } from "bootstrap-icons/icons/trash-fill.svg";
import { removeToDo, updateToDo } from "../../firebase/firebaseinit";


const ToDoListItem = (props) => {
    console.log(`${props.val} has changed`);
    const [val, setVal] = useState(props.val);
    const [completed, setCompleted] = useState(props.completed)

    useEffect(() => {
        if (val !== props.val) setVal(props.val);
    }, [props.val]);

    const updateFirestore = (val, completed) => {
        updateToDo(props.collectionUUID, props.id, val, completed);
    }

    const handleInputChange = (event) => {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;

        if (target.type !== 'checkbox') {
            // change to do list value
            setVal(target.value);
        } else {
            // toggle text line through
            setCompleted(target.checked);

            // since setCompleted is an asynchronous function the var "completed" might not have updated yet,
            // so use target.checked
            updateFirestore(val, target.checked);
        }
    };

    const lostFocus = () => {
        if (props.val !== val) {
            updateFirestore(val, completed);
        }
    }

    const { collectionUUID, id } = props;
    return (
        <div className="d-flex dim-hover-focus my-1 py-1">
            <div className="input-group">
                <div className={`input-group-text bg-transparent no-outline colored-left-border ${completed ? "completed-task" : ""}`}>
                    <input className="form-check-input" type="checkbox" value=""
                        aria-label="Checkbox for following text input" onChange={handleInputChange} checked={completed} />
                </div>
                <Textarea type="text" className={`form-control no-outline border-bottom-focus bg-transparent ${completed ? "text-decoration-line-through" : ""}`}
                    autoComplete="off"
                    aria-label="Text input with checkbox" name="val" value={val}
                    onChange={handleInputChange} onBlur={lostFocus} />
            </div>

            {/*trashcan svg on the right with delete functionality*/}
            <div className="ml-auto pl-2 d-flex">
                <button onClick={() => removeToDo(id, collectionUUID)}
                    className="border-0 btn-transition btn btn-outline-danger">
                    <Trash />
                </button>
            </div>
        </div>
    );
}



export default ToDoListItem;