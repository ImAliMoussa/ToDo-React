import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import TodoList from "./components/todo-list/todo-list.component";
import {auth, firestore} from "./firebase/firebaseinit";
import ToDoListCreator from "./components/todo-list-creator/todo-list-creator.component";

class App extends React.Component {
    state = {
        userToDoLists: []
    }

    unsubscribeFromToDoLists = null

    componentDidMount() {
        const user = auth.currentUser;
        this.unsubscribeFromToDoLists = firestore.collection(`users/${user.uid}/todos`)
            .onSnapshot((querySnapshot) => {
                const newToDoLists = [];
                querySnapshot.forEach((doc) => {
                    // console.log({id: doc.id});
                    // console.log({data: doc.data()});
                    if (doc.exists)
                        newToDoLists.push({collectionUUID: doc.id, creationDate: doc.data().creationDate});
                });
                newToDoLists.sort((a, b) => {
                    return b.creationDate - a.creationDate
                })
                this.setState({userToDoLists: [...newToDoLists]});
            });
    }

    componentWillUnmount() {
        this.unsubscribeFromToDoLists && this.unsubscribeFromToDoLists();
    }

    render() {
        const {userToDoLists} = this.state;
        return (
            <>
                <Navbar/>
                {/*<Clock/>*/}
                <div className="container-fluid my-5">
                    <div className="row mb-5">
                        <ToDoListCreator/>
                    </div>
                    <div className="row">
                        {
                            userToDoLists.length > 0 && userToDoLists.map(({collectionUUID}) => <TodoList
                                key={collectionUUID} collectionUUID={collectionUUID}/>)
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default App;
