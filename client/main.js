import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import Router from './router'
import {createBrowserHistory} from 'history'
import configStore from './api/configStore'

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('mount-point')
);

//module.hot.accept();
