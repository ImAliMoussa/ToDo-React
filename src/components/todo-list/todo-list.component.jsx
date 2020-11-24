import React from 'react';
import './todo-list.styles.scss';
import ToDoHeader from "../todo-header/todo-header.component";
import ToDoListItem from "../todo-list-item/todo-list-item.component";
import {firestore} from "../../firebase/firebaseinit";

class TodoList extends React.Component {
    state = {
        todos: [],
        title: "",
        users: []
    }

    unsubscribeFromToDoList = null

    rerenderToDoList = () => {
        firestore.doc(`todoCollections/${this.props.collectionUUID}`).get().then(doc => {
            const {title, users} = doc.data();
            this.setState({title, users});
        }).catch(err => {
            console.error(err);
        })
        this.unsubscribeFromToDoList = firestore.collection(`todoCollections/${this.props.collectionUUID}/todos`)
            .onSnapshot((querySnapshot) => {
                console.log("RerenderToDoList was called");
                console.log({querySnapshot});
                const newToDos = [];
                querySnapshot.forEach(function (doc) {
                    console.log({doc})
                    if (doc.exists)
                        newToDos.push({id: doc.id, data: doc.data()});
                });
                this.setState({todos: [...newToDos]});
            });
    };

    componentDidMount() {
        this.rerenderToDoList();
    }

    componentWillUnmount() {
        this.unsubscribeFromToDoList();
    }

    render() {
        const {todos, title} = this.state;
        const {collectionUUID} = this.props;
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div className="card-hover-shadow-2x mb-3 card">
                    <ToDoHeader title={title} collectionUUID={collectionUUID}/>
                    <div className="card-body">
                        <div>
                            {
                                todos.length > 0 ? (todos.map(todo => <ToDoListItem
                                    key={todo.id} {...todo} collectionUUID={collectionUUID}/>)) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
