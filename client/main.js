import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import configStore from './api/configStore';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from '../client/theme'

const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    </Provider>
    , document.getElementById('mount-point')
);

//module.hot.accept();
