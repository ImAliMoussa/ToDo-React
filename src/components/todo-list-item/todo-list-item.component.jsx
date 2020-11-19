import React from 'react';
import './todo-list-item.styles';
import {ReactComponent as Trash} from "bootstrap-icons/icons/trash-fill.svg";

const ToDoListItem = () => {
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
                        <div className="widget-heading">Call Sam For payments <div
                            className="badge bg-danger ml-2">Rejected</div>
                        </div>
                        <div className="widget-subheading">
                            By Bob
                            <div className="badge rounded-pill bg-info ml-2">
                                NEW
                            </div>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <button
                            className="border-0 btn-transition btn btn-outline-danger">
                            <Trash/>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ToDoListItem;