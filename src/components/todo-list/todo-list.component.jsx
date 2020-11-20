import React from 'react';
import './todo-list.styles.scss';
import ToDoHeader from "../todo-header/todo-header.component";
import ToDoFooter from "../todo-footer/todo-footer.component";
import ToDoListItem from "../todo-list-item/todo-list-item.component";
import {firestore} from "../../firebase/firebaseinit";

class TodoList extends React.Component {
    state = {
        todos: []
    }

    rerenderToDoList = (collectionUUID) => {
        collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
        firestore.collection(`todoCollections/${collectionUUID}/todos`)
            .onSnapshot((querySnapshot) => {
                console.log("RerenderToDoList was called");
                const newToDos = [];
                querySnapshot.forEach(function (doc) {
                    console.log({doc})
                    if (doc.exists)
                        newToDos.push({id: doc.id, data: doc.data()});
                });
                this.setState({todos: [...newToDos]});
            });

        firestore.collection(`todoCollections/${collectionUUID}/todos`)
            .onSnapshot(function(snapshot) {
                snapshot.docChanges().forEach(function(change) {
                    if (change.type === "added") {
                        console.log("New city: ", change.doc.data());
                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                    }
                    if (change.type === "removed") {
                        console.log("Removed city: ", change.doc.data());
                    }
                });
            });
    };

    componentDidMount() {
        this.rerenderToDoList();
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card-hover-shadow-2x mb-3 card">
                            <ToDoHeader/>
                            <div className="scroll-area-sm">
                                <ul className=" list-group list-group-flush">
                                    {
                                        todos.length > 0 ? (todos.map(todo => <ToDoListItem key={todo.id} {...todo} />)) : null
                                    }
                                </ul>
                            </div>
                            <ToDoFooter/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
