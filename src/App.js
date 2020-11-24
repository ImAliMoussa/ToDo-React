import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import TodoList from "./components/todo-list/todo-list.component";
import {auth, firestore} from "./firebase/firebaseinit";
import ToDoListCreator from "./components/todo-list-creator/todo-list-creator.component";

class App extends React.Component {
    state = {
        user: null,
        userToDoLists: []
    }

    unSubscribeFromAuth = null
    unsubscribeFromToDoLists = null

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            this.setState({
                user: userAuth
            });
            this.unsubscribeFromToDoLists = firestore.collection(`users/${userAuth.uid}/todos`)
                .onSnapshot((querySnapshot) => {
                    const newToDoLists = [];
                    querySnapshot.forEach((doc) => {
                        console.log({id: doc.id});
                        console.log({data: doc.data()});
                        if (doc.exists)
                            newToDoLists.push(doc.id);
                    });
                    this.setState({userToDoLists: [...newToDoLists]});
                });
        });
    }

    componentWillUnmount() {
        if (this.unSubscribeFromAuth) {
            this.unSubscribeFromAuth();
            this.unsubscribeFromToDoLists();
        }
    }

    render() {
        const {userToDoLists} = this.state;
        return (
            <>
                <Navbar user={this.state.user}/>
                {/*<Clock/>*/}
                <div className="container mt-5">
                    <div className="row mb-5">
                        <ToDoListCreator />
                    </div>
                    <div className="row">
                        {
                            userToDoLists.length > 0 && userToDoLists.map(collectionUUID => <TodoList key={collectionUUID} collectionUUID={collectionUUID}/>)
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default App;
