import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login.';

function Router() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/signin' component={Register} />
                    <Route path='/' component={Login} />
                    <Redirect to='/'/>
                </Switch>
            </BrowserRouter>
    )
}

export default Router
