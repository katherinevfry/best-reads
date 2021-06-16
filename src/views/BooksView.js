import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import BookForm from '../components/forms/bookForm';
import BookCard from '../components/BookCard';
import { getBooks } from '../helpers/data/bookData';

export default function BooksView({ user }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks(user.uid).then(setBooks);
  }, [books.length]);
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
      <div className='flex justify-center'>
      <button type='button'
      onClick={() => history.push('/search')}
      className='bg-red-400 hover:bg-red-500 shadow-sm text-white py-2 px-3 rounded-full m-2'>
        search
      </button>
      <button type='button'
      className='bg-red-400 hover:bg-red-500 shadow-sm text-white py-2 px-3 rounded-full m-2'
      onClick={seeForm}>
        {creating ? 'close form' : '+ add a book'}
      </button>
      </div>
      <div className="w-96 mx-auto">
      {creating && <BookForm setBooks={setBooks} user={user}/>}
      </div>
    <div>
      <div className="flex justify-center mt-2">
        <button type='button'
        className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
        onClick={sortBooks}>
          sort by rating
        </button>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
      {books.map((book) => (
        <BookCard
        key={book.firebaseKey}
        user={user}
        setBooks={setBooks}
        {...book}
        />
      ))}
      </div>
      </div>
    </div>
  );
}

BooksView.propTypes = {
  user: PropTypes.any,
};
