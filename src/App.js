import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import Clock from "./components/clock/clock.component";
import TodoList from "./components/todo-list/todo-list.component";
import {addToDo, firestore, testFirebase, testFirebaseGet} from "./firebase/firebaseinit";

class App extends React.Component {
    state = {
        todos: []
    }

    rerenderToDoList = (collectionUUID) => {
        collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
        firestore.collection(`todoCollections/${collectionUUID}/todos`)
            .onSnapshot((querySnapshot) => {
                console.log("viewtodos was called");
                const newToDos = [];
                querySnapshot.forEach(function (doc) {
                    newToDos.push({id: doc.id, data: doc.data()});
                });
                this.setState({todos: [...newToDos]});
            });
    };

    componentDidMount() {
        this.rerenderToDoList();
    }

    render() {
        return (
            <>
                <Navbar/>
                {/*<Clock/>*/}
                <TodoList todos={this.state.todos} />
                <button onClick={addToDo}>Add a new todo</button>
            </>
        );
    }
}

export default App;
