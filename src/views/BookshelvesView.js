import React from 'react';
import PropTypes from 'prop-types';
import BookshelfCard from '../components/forms/BookshelfCard';

export default function BookshelvesView({ bookshelves, setBookshelves, user }) {
  console.warn(user, setBookshelves);
  return (
    <div>
      <h1>this is the bookshelves view</h1>
      {bookshelves.map((bookshelf) => (
        <BookshelfCard key={bookshelf.firebaseKey}
        {...bookshelf}
        />
      ))}
    </div>
  );
}

BookshelvesView.propTypes = {
  bookshelves: PropTypes.array,
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
