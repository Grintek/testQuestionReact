import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import configStore from './api/configStore'

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('mount-point')
);

//module.hot.accept();
