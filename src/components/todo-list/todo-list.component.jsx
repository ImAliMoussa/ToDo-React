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
                const newToDos = [];
                querySnapshot.forEach((doc) => {
                    if (doc.exists)
                        newToDos.push({id: doc.id, data: doc.data()});
                });
                newToDos.sort((a, b) => {
                    return b.data.creationDate.toDate() - a.data.creationDate.toDate()
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
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="mb-3 card small-outline">
                    <ToDoHeader title={title} collectionUUID={collectionUUID}/>
                    <div className="card-body pt-0">
                        <div className="max-card-height">
                            {
                                todos.length > 0 ? (todos.map(todo => <ToDoListItem
                                    key={todo.id} id={todo.id} {...todo.data} collectionUUID={collectionUUID}/>)) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
