import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'
import { isAbsolute } from 'path';

export class BookList extends Component{

    renderList(){
        return this.props.booksprop.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={ () => this.props.selectedBook(book) }
                    className="list-group-item">
                    {book.title}
                    </li>
            );
        });
    }

    render(){

        return(
            <ul className="list-group col sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        booksprop: state.books
    };
}

// Anthing returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    // Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectedBook: selectBook}, dispatch)
}


// Promote BookList from a componenet to a container - it needs to know
// about this new dispatch meethod, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
