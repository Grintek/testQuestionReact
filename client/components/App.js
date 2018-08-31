import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './App.scss';
import {fetchAllBooks} from '../api/'
import BooksApp from '../components/BooksApp/BooksApp'
class App extends Component{
   static propTypes = {
       fetchAllBooks: PropTypes.func.isRequired
   };

    componentDidMount(){
        this.props.fetchAllBooks();
    }
    render() {
        return (
            <div>
                <header><h1>Books</h1></header>
                <BooksApp state={this.props.user}/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{
        fetchAllBooks(){
            dispatch(fetchAllBooks());
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
