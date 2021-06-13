import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookshelfForm from '../components/forms/BookshelfForm';
import BookshelfCard from '../components/BookshelfCard';

export default function BookshelvesView({ bookshelves, setBookshelves, user }) {
  const [adding, setAdding] = useState(false);
  const seeForm = () => {
    setAdding((prevState) => !prevState);
  };
  const getBookshelfCards = () => (
    bookshelves.map((bookshelf) => (
      <BookshelfCard key={bookshelf.firebaseKey}
      setBookshelves={setBookshelves}
      {...bookshelf}
      />
    ))
  );
  return (
    <div>
      <div className='flex justify-center m-3'>
        <button type='button'
        className='bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full'
        onClick={seeForm}>
          {adding ? 'close form' : '+ add a bookshelf'}
        </button>
      </div>

      {
      adding && <BookshelfForm setBookshelves={setBookshelves} user={user}/>
      }

      <div className='flex flex-row flex-wrap justify-center'>
        { bookshelves != null
          ? getBookshelfCards()
          : <h2>please add a bookshelf</h2>
      }
      </div>
    </div>
  );
}

BookshelvesView.propTypes = {
  bookshelves: PropTypes.array,
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
