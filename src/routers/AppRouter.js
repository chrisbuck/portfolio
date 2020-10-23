import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as historyMod from 'history';
import MainPage from '../pages/MainPage';
import ProjectsPage from '../pages/ProjectsPage';
import ReactPage from '../pages/ReactPage';
import ResumePage from '../pages/ResumePage';

export const history = historyMod.createBrowserHistory();

const isDev = false;
let approot = '/';
if( isDev === false ){
    approot = '/portfolio/';
}

const AppRouter = () => (
    <Router history={history}>
        <div className="body-content">
        <Switch>
            <Route path={approot + ""} component={MainPage} exact={true} />
            <Route path={approot + "projects"} component={ProjectsPage} />
            <Route path={approot + "react"} component={ReactPage} />
            <Route path={approot + "resume"} component={ResumePage} exact={true} />
        </Switch>
        </div>
    </Router>
);
    
export default AppRouter;