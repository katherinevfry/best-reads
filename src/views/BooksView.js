import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import BookForm from '../components/forms/bookForm';
import BookCard from '../components/BookCard';

const BookContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
`;

export default function BooksView({ books, setBooks, user }) {
  const history = useHistory();
  const [creating, setCreating] = useState(false);
  const seeForm = () => {
    setCreating((prevState) => !prevState);
  };

  const sortBooks = () => {
    const sortedBook = [...books];
    sortedBook.sort((a, b) => {
      if (a.rating > b.rating) return -1;
      if (a.rating < b.rating) return 1;
      return 0;
    });
    setBooks(sortedBook);
  };

  return (
    <div>
      <h1 className='font-mono text-center'>my books</h1>
      <div className='flex justify-center'>
      <button type='button'
      onClick={() => history.push('/search')}
      className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full m-2'>
        search
      </button>
      <button type='button'
      className='bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full m-2'
      onClick={seeForm}>
        {creating ? 'close form' : '+ add a book'}
      </button>
      </div>
      {creating && <BookForm setBooks={setBooks} user={user}/>}
    <div>
      <button type='button'
      className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
      onClick={sortBooks}>
        sort by rating
        </button>
      <BookContainer>
      {books.map((book) => (
        <BookCard
        key={book.firebaseKey}
        user={user}
        setBooks={setBooks}
        {...book}
        />
      ))}
      </BookContainer>
      </div>
    </div>
  );
}

BooksView.propTypes = {
  user: PropTypes.any,
  books: PropTypes.array,
  setBooks: PropTypes.func
};
