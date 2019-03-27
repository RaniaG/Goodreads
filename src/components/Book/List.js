import React from 'react';
import BookDetailedCard from './Card-Detailed';
import BookBriefCard from './Card-brief'
import books from './books';

export default class BooksList extends React.Component {
    state = {
        books: books,
    }
    render() {
        return (
            <>
                {this.state.books.map(b => (
                    <BookDetailedCard key={b.id} {...b} />
                ))}
                <div className="book-flex-wrap">
                    {this.state.books.map(b => (
                        <BookBriefCard key={b.id} {...b}/>
                    ))}
                </div>

            </>
        )
    }
}