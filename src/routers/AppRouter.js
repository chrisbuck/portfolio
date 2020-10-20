import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import * as historyMod from 'history';
import MainPage from '../pages/MainPage';
import ProjectsPage from '../pages/Projects';
import ReactPage from '../pages/ReactPage';

export const history = historyMod.createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="body-content">
        <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/react" component={ReactPage} />
        </Switch>
        </div>
    </Router>
);
    
export default AppRouter;