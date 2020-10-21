import React from 'react';
import ReactDOM from 'react-dom';
import * as historyMod from 'history';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import './styles/styles.scss';

import App from './components/App';
import LoadingPage from './pages/LoadingPage';

export const history = historyMod.createBrowserHistory();

const Jsx = (props) => {
    return(
        <div>
            <App />
        </div>
    );
}

let hasRendered = false;
export const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(<Jsx></Jsx>, document.getElementById('root'));
        hasRendered = true;
        return(hasRendered);
    } else {
        return false;
    }
};

// ReactDOM.render(<LoadingPage />, document.getElementById('root'));
renderApp();

/*
// firebase.auth().onAuthStateChanged((user) => {
//     if(user){
//             renderApp();
//             if ( history.location.pathname === '/' ) {
//                 history.push('/restaurants');
//             }
//     } else {
//         renderApp();
//         history.push('/');
//     }
// });
*/