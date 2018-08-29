import React from 'react';
import { connect } from 'react-redux';
import './App.scss';

function App(props) {
    const {user, name, age} = props.user;
    return(
        <div>Hell world { name }!
        <h1>{age}</h1>
            <h2>{user}</h2>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(App);
