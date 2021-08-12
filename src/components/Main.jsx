import React from 'react';
import ProfilePage from './ProfilePage'
import Users from './Users'
import { Switch, Route } from 'react-router-dom';
import Login from './Login';

const Main = () => {
    return (
        <div>
            <Switch>

                <Route exact path="/" component={ProfilePage} />

                <Route path="/users" component={Users} />

                <Route path="/login" component={Login} />

            </Switch>
        </div>
    );
};

export default Main;