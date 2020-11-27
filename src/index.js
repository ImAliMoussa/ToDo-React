import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/scss/bootstrap.scss";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom/";
import WelcomePage from "./pages/welcome-page/welcome-page.component";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <WelcomePage/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
