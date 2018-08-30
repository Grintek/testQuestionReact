import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import BooksApp from '../components/BooksApp/BooksApp'
function App(props) {
    return(
        <div>
            <header><h1>Books</h1></header>
            <BooksApp state={props.user}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App);
