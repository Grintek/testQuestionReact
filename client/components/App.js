import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types'
import './App.scss';
import {fetchAllBooks} from '../api/'
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import {Router} from '@reach/router';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {blue, red} from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import BooksApp from '../components/BooksApp/BooksApp';
import BookId from '../components/BookId/BookId';
import NotFound from '../NotFound';

function App(props){
    const styl = {position: 'fixed', width: '100%', marginLeft: -8, marginTop: -8};
    const sty = {background: blue[100], paddingTop: 10, paddingBottom: 10};
    return (
            <div>
                <section>
                    <Paper elevation={1} style={styl}>
                        <Toolbar style={sty}>
                            <Typography>
                                <Button href="/" color="primary" style={{backgroundColor: red[200]}}>Home</Button>
                            </Typography>
                        </Toolbar>
                    </Paper>
                    <section style={{paddingTop: 100}}>
                        <div>
                            {/*<Switch>*/}
                                {/*<Route exact path="/" component={BooksApp} />*/}
                                {/*<Route path="/books" component={BooksApp} />*/}
                                {/*<Route path="/books/:id"  component={BooksId} />*/}
                                {/*<Route component={NotFound} />*/}
                            {/*<Redirect to="/"/>*/}
                            {/*</Switch>*/}
                            <Router>
                                <BooksApp path="/"/>
                                <BooksApp path="/books"/>
                                <BookId path="/books/:id"/>
                                <NotFound path="*"/>
                            </Router>
                        </div>
                    </section>
                </section>
            </div>
        );
}

export default App;
