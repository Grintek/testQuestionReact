import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchBook} from '../../api/';
import PropTypes from "prop-types";

class BookId extends Component{
    static propTypes = {
        fetchBook: PropTypes.func.isRequired,
        bookApp: PropTypes.array.isRequired,
        bookId: PropTypes.number
    };

    componentDidMount(){
        const bookId = this.props.match.params.id;
        console.log(bookId);
        this.props.fetchBook(bookId);
    }
    render() {
        const {book} = this.props.bookApp;
        console.log(book);
        return (
            <div>
                <h1>Название книги</h1>
                {book.name}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        bookApp: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        fetchBook(){
            dispatch(fetchBook());
        }

    }
}

export default connect( mapStateToProps, mapDispatchToProps )(BookId)