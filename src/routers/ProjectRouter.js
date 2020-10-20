import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import * as historyMod from 'history';
import ReactPage from '../pages/ReactPage';

export const history = historyMod.createBrowserHistory();

const ProjectRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <Route path="/react" component={ReactPage} />
        </Switch>
        </div>
    </Router>
);
    
export default ProjectRouter;