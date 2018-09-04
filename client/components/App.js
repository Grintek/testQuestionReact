import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types'
import './App.scss';
import {fetchAllBooks} from '../api/'
import {Route, Switch, Redirect, Link} from 'react-router-dom';


import BooksApp from '../components/BooksApp/BooksApp';
import BooksId from '../components/BookId/BookId';
function App(){
    return (
            <div>
                <section>
                    <Link to="/"><h1>HOME</h1></Link>

                    <section>
                        <Switch>
                            <Route exact path="/" component={BooksApp} />
                            <Route exact path="/books" component={BooksApp} />
                            <Route exact path="/book/:id" component={BooksId} />
                            <Redirect to="/"/>
                        </Switch>
                    </section>
                </section>
            </div>
        );
}

export default App;
