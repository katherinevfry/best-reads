import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookshelfForm from '../components/forms/BookshelfForm';
import BookshelfCard from '../components/BookshelfCard';
import { getBookshelves } from '../helpers/data/bookshelvesData';

export default function BookshelvesView({ user }) {
  const [adding, setAdding] = useState(false);
  const [bookshelves, setBookshelves] = useState([]);
  useEffect(() => {
    getBookshelves(user.uid).then(setBookshelves);
  }, [bookshelves]);
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
        className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
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
