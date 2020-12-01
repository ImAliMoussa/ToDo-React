import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/scss/bootstrap.scss";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom/";
import AppRouting from "./app-routing";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRouting/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
