import React from 'react';
import PropTypes from 'prop-types';
import BookForm from '../components/forms/bookForm';
import BookCard from '../components/BookCard';

export default function BooksView({ books, setBooks, user }) {
  console.warn(books);
  return (
    <div>
      <h1>this is the books view</h1>
      <BookForm setBooks={setBooks} user={user}/>
      <div className="flex-row justify-center w-auto">
      {books.map((book) => (
        <BookCard
        key={book.firebaseKey}
        {...book}
        />
      ))}
      </div>
    </div>
  );
}

BooksView.propTypes = {
  user: PropTypes.any,
  books: PropTypes.array,
  setBooks: PropTypes.func
};
