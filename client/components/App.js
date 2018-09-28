import React, {Component} from 'react';
import './App.scss';
import {Router, Redirect} from '@reach/router';
import Paper from '@material-ui/core/Paper';
import {blue, red} from '@material-ui/core/colors';
import BooksApp from '../components/BooksApp/BooksApp';
import BookId from '../components/BookId/BookId';
import Login from './Login/Login';
import NotFound from '../NotFound';
import Navigation from '../container/Navigation';
import Admin from '../components/LoginAdmin/Admin';


function App(props){

    const styl = {position: 'fixed', width: '100%', marginLeft: -8, marginTop: -8};
    const value = window.localStorage.getItem('vk_login');
    let loginPlay;
        if(value === "true") {
            loginPlay =
                <Router>
                <Redirect from="/" to="/home"/>
                <BooksApp path="/home" />
                <BooksApp path="/books" />
                <BookId path="/books/:id" />
                <Admin path="/admin"/>
                <NotFound default />
                </Router>
         }else{
            loginPlay =
                <Router>
                <Redirect from="*" to="/"/>
                <Login path="/" />
                </Router>
        }
    return (
            <div>
                <section>
                    <Paper elevation={1} style={styl}>
                        <Navigation />
                    </Paper>
                    <section style={{paddingTop: 100}}>
                        <div>
                            {loginPlay}
                        </div>
                    </section>
                </section>
            </div>
        );
}

export default App;
