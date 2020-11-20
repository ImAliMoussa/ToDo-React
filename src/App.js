import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import TodoList from "./components/todo-list/todo-list.component";

class App extends React.Component {
    render() {
        return (
            <>
                <Navbar/>
                {/*<Clock/>*/}
                <TodoList/>
            </>
        );
    }
}

export default App;
