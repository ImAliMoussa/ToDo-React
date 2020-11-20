import React from 'react';
import './todo-list-item.styles.scss';
import {ReactComponent as Trash} from "bootstrap-icons/icons/trash-fill.svg";
import {removeToDo} from "../../firebase/firebaseinit";

const ToDoListItem = ({todoContent, todoAuthor, todoTags, ...otherProps}) => {
    console.log({otherProps, id: otherProps.id, val: otherProps.data.val});
    return (
        <li className="list-group-item">
            <div className="todo-indicator bg-warning"/>
            <div className="widget-content p-0">
                <div className="d-flex align-items-center">
                    <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control"><input
                            className="custom-control-input"
                            id="exampleCustomCheckbox12" type="checkbox"/><label
                            className="custom-control-label"
                            htmlFor="exampleCustomCheckbox12">&nbsp;</label>
                        </div>
                    </div>
                    <div className="widget-content-left">
                        <div className="widget-heading">{otherProps.data.val}
                            <div
                                className="badge bg-danger ml-2">Rejected
                            </div>
                        </div>
                        <div className="widget-subheading">
                            {todoAuthor}
                            <div className="badge rounded-pill bg-info ml-2">
                                {todoTags}
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button onClick={() => removeToDo(otherProps.id)} className="border-0 btn-transition btn btn-outline-danger">
                            <Trash/>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ToDoListItem;