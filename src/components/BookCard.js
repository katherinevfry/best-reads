import React from 'react';
import PropTypes from 'prop-types';

export default function BookCard({ ...book }) {
  return (
    <>
      <div className='boookCard rounded bg-white w-1/3 shadow-md m-3'>
        <div className='flex-row row-wrap justify-center'>
          <img src={book.imageUrl} alt={book.title} className='w-48 object-scale-down rounded m-auto'></img>
          <div className="px-6 py-4">
            <h3>{book.title}</h3>
            <h6>{book.author}</h6>
            <p>{book.rating}/5</p>
            <p>{book.review}</p>
          </div>
        </div>
      </div>
    </>
  );
}

BookCard.propTypes = {
  book: PropTypes.object
};
