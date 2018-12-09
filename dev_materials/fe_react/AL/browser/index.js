import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import history from './history'
import store from './store.jsx';
import { Provider } from 'react-redux'
import AppContainer from './AppContainer.jsx'

ReactDOM.render(
    <Provider store={store} >
        <Router history={history}>
            <AppContainer />
        </Router>
    </Provider>,

    document.getElementById('app')
);

//this