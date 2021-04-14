import React from 'react'
import { Route, Redirect }  from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = (props) => {
    const { currentUser } = useAuth();

    return (
        <Route {...props}>
            {
                currentUser ? props.children : <Redirect to="/signin" />
            }
        </Route>
    )
}

export default PrivateRoute