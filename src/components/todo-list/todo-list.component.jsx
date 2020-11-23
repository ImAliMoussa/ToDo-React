import React from 'react';
import './todo-list.styles.scss';
import ToDoHeader from "../todo-header/todo-header.component";
import ToDoListItem from "../todo-list-item/todo-list-item.component";
import {firestore} from "../../firebase/firebaseinit";

class TodoList extends React.Component {
    state = {
        todos: [],
        collectionUUID: "PcVecRy8QiK2gOnZ68Ng"
    }

    unsubscribeFromToDoList = null

    rerenderToDoList = () => {
        this.unsubscribeFromToDoList = firestore.collection(`todoCollections/${this.state.collectionUUID}/todos`)
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
    };

    selectNewToDoList = (collectionUUID) => {
        console.log("selecting new to do list", {collectionUUID});
        this.setState({
            collectionUUID
        });
        this.unsubscribeFromToDoList();
        this.rerenderToDoList();
    }

    componentDidMount() {
        this.rerenderToDoList();
    }

    componentWillUnmount() {
        this.unsubscribeFromToDoList();
    }

    render() {
        const {todos, collectionUUID} = this.state;
        return (
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card-hover-shadow-2x mb-3 card">
                            <ToDoHeader collectionUUID={collectionUUID} selectNewToDoList={this.selectNewToDoList}/>
                            <div className="card-body">
                                <div>
                                    {
                                        todos.length > 0 ? (todos.map(todo => <ToDoListItem
                                            key={todo.id} {...todo} collectionUUID={collectionUUID} />)) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
