import React from 'react';
import './todo-list-item.styles.scss';
import {ReactComponent as Trash} from "bootstrap-icons/icons/trash-fill.svg";
import {removeToDo} from "../../firebase/firebaseinit";

class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.data.val,
            id: props.id
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="d-flex dim-hover-focus my-1 py-1">
                <div className="input-group">
                    <div className="input-group-text bg-transparent no-outline">
                        <input className="form-check-input" type="checkbox" value=""
                               aria-label="Checkbox for following text input" onChange={this.handleInputChange}/>
                    </div>
                    <input type="text" className="form-control no-outline border-bottom-focus bg-transparent"
                           aria-label="Text input with checkbox" name="val" value={this.state.val}
                           onChange={this.handleInputChange}/>
                </div>

                {/*trashcan svg on the right with delete functionality*/}
                <div className="ml-auto pl-2 d-flex">
                    <button onClick={() => removeToDo(this.state.id)}
                            className="border-0 btn-transition btn btn-outline-danger">
                        <Trash/>
                    </button>
                </div>

            </div>
        );
    }
}

export default ToDoListItem;