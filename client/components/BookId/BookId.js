import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchBook} from '../../api/';
import PropTypes from "prop-types";
class BookId extends Component{
    static propTypes = {
        fetchBook: PropTypes.func.isRequired
    };

    componentDidMount(){
        this.props.fetchBook();
    }
    render() {
        return (
            <div>
                <h1>Название книги</h1>
                <h3></h3>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchBook(){
            dispatch(fetchBook());
        }

    }
}

export default connect( null, mapDispatchToProps )(BookId)