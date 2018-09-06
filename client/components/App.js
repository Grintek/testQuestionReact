import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types'
import './App.scss';
import {fetchAllBooks} from '../api/'
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import {blue} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import BooksApp from '../components/BooksApp/BooksApp';
import BooksId from '../components/BookId/BookId';

function App(){
    const styl = {position: 'fixed', width: '100%', margin: 0};
    return (
            <div>
                <section>
                    <Paper elevation={1} style={styl}>
                        <Button href="/" color="primary" style={{Color: blue}}><h1>Home</h1></Button>
                    </Paper>
                    <section style={{paddingTop: 50}}>
                        <div>
                            <Switch>
                                <Route exact path="/" component={BooksApp} />
                                <Route exact path="/books" component={BooksApp} />
                                <Route exact path="/book/:id" component={BooksId} />
                            <Redirect to="/"/>
                            </Switch>
                        </div>
                    </section>
                </section>
            </div>
        );
}

export default App;
