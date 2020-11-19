import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar.component";
import Clock from "./components/clock/clock.component";
import TodoList from "./components/todo-list/todo-list.component";


function App() {
    return (
        <>
            <Navbar/>
            <Clock/>
            <TodoList/>
        </>
    );
}

export default App;
