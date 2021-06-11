import React from 'react';
import PropTypes from 'prop-types';
import BookshelfForm from '../components/forms/BookshelfForm';
import BookshelfCard from '../components/BookshelfCard';

export default function BookshelvesView({ bookshelves, setBookshelves, user }) {
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
      <h1>this is the bookshelves view</h1>
      <BookshelfForm setBookshelves={setBookshelves} user={user}/>
      <div className='flex flex-row flex-wrap'>
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
