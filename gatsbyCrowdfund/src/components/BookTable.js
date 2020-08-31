import React from 'react';
import { BookRows } from './BookRows';
import { FeedbackForm } from './FeedbackForm';


export class BookTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
            authors: this.props.authors
        };
        this.removeFromTable = this.removeFromTable.bind(this);
    }

    removeFromTable(bookId) {
        this.setState(function (state) {
            let elem = state.books.find(book => book.id == bookId)

            let newState = [...state.books.filter(book => book.id != bookId), elem]

            return {
                books: newState
            }
        });
    }

    render() {
        console.log('render BookTable')
        const { books, authors } = this.state;
        return (
            <React.Fragment>
                <BookRows removeFromTable={this.removeFromTable} books={books} authors={authors} />
                <FeedbackForm></FeedbackForm>
            </React.Fragment>
        );
    }
}




