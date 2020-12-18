import React from 'react';
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => user
                ? <Component {...props} />
                : <Redirect to='/'/>}
        />
    )
}

export const PublicRoute = ({component: Component, user, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => !user
                ? <Component {...props} />
                : <Redirect to='/app'/>}
        />
    )
}
