import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BookForm from '../components/forms/bookForm';
import BookCard from '../components/BookCard';

const BookContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

export default function BooksView({ books, setBooks, user }) {
  console.warn(books);
  return (
    <div>
      <h1>this is the books view</h1>
      <BookForm setBooks={setBooks} user={user}/>
      <BookContainer>
      {books.map((book) => (
        <BookCard
        key={book.firebaseKey}
        setBooks={setBooks}
        {...book}
        />
      ))}
      </BookContainer>
    </div>
  );
}

BooksView.propTypes = {
  user: PropTypes.any,
  books: PropTypes.array,
  setBooks: PropTypes.func
};
