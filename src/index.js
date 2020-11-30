import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/scss/bootstrap.scss";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom/";
import SignInPage from "./pages/sign-up-page/signup-page.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import SignUpPage from "./pages/sign-up-page/signup-page.component";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <SignUpPage/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
