import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import * as historyMod from 'history';
import MainPage from '../pages/MainPage';
import ProjectsPage from '../pages/ProjectsPage';
import ReactPage from '../pages/ReactPage';
import ResumePage from '../pages/ResumePage';

export const history = historyMod.createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="body-content">
        <Switch>
            <Route path="/" component={MainPage} exact={true} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/react" component={ReactPage} />
            <Route path="/resume" component={ResumePage} />
        </Switch>
        </div>
    </Router>
);
    
export default AppRouter;