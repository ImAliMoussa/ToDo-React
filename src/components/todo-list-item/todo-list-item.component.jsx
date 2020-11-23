import React from 'react';
import './todo-list-item.styles.scss';
import {ReactComponent as Trash} from "bootstrap-icons/icons/trash-fill.svg";
import {removeToDo, updateToDo} from "../../firebase/firebaseinit";


// TODO -> make to do list coloured red or something if user typed something and database hasn't updated yet
class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: props.data.val,
            previousVal: props.data.val,
            id: props.id,
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

    componentWillUnmount = () => {
        this.lostFocus();
    }

    lostFocus = () => {
        const val = this.state.val;
        if (this.state.previousVal !== val) {
            updateToDo(this.props.collectionUUID, this.props.id, val);
            this.setState({
                previousVal: val
            });
        }
    }

    render() {
        return (
            <div className="d-flex dim-hover-focus my-1 py-1">
                <div className="input-group">
                    <div className="input-group-text bg-transparent no-outline colored-left-border">
                        <input className="form-check-input" type="checkbox" value=""
                               aria-label="Checkbox for following text input" onChange={this.handleInputChange}/>
                    </div>
                    <input type="text" className="form-control no-outline border-bottom-focus bg-transparent"
                           aria-label="Text input with checkbox" name="val" value={this.state.val}
                           onChange={this.handleInputChange} id={this.props.id} onBlur={this.lostFocus}/>
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