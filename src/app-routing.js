import React from 'react';
import {auth} from "./firebase/firebaseinit";
import {PrivateRoute, PublicRoute} from "./components/react-router/routes.component";
import SignUpPage from "./pages/sign-up-page/signup-page.component";
import SignIn from "./pages/sign-in-page/sign-in.component";
import WelcomePage from "./pages/welcome-page/welcome-page.component";
import App from "./App";
import {Switch} from "react-router-dom";


class AppRouting extends React.Component {
    state = {
        user: null
    }
    unSubscribeFromAuth = null

    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            this.setState({
                user: userAuth
            });
        });
    }

    componentWillUnmount() {
        this.unSubscribeFromAuth && this.unSubscribeFromAuth()
    }

    render() {
        const {user} = this.state;
        return (
            <Switch>
                <PublicRoute user={user} exact path='/' component={WelcomePage} />
                <PublicRoute user={user} path='/signin' component={SignIn} />
                <PublicRoute user={user} path='/signup' component={SignUpPage} />
                <PrivateRoute user={user} path='/app' component={App} />
            </Switch>
        );
    }
}

export default AppRouting;