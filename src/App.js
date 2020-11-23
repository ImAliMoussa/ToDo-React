import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import TodoList from "./components/todo-list/todo-list.component";
import {auth} from "./firebase/firebaseinit";

class App extends React.Component {
    state = {
        user: null
    }
    unSubscribeFromAuth = null

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            this.setState({
                user: userAuth
            });
            console.log({userAuth});
        });
    }

    componentWillUnmount() {
        if (this.unSubscribeFromAuth) {
            this.unSubscribeFromAuth();
        }
    }

    render() {
        return (
            <>
                <Navbar user={this.state.user}/>
                {/*<Clock/>*/}
                <TodoList/>
            </>
        );
    }
}

export default App;
