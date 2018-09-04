import React, {Component} from 'react';
import PropType from 'prop-types';
import {fetchAllBooks} from '../../api/'
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom';

class BooksApp extends Component {
    static propTypes = {
        fetchAllBooks: PropType.func.isRequired,
        user: PropType.object.isRequired
    };

    componentDidMount(){
        this.props.fetchAllBooks();
    }

    render() {
        const {books} = this.props.user;
        return (
            <div>
                <h1>Books {books.length}</h1>
                    {books.map((e) =>
                        <Link to={`/book/${e.id}`} key={e.id}>
                            {e.name}
                        </Link>
                    )}
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksApp);
