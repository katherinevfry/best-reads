import React from 'react';
import PropTypes from 'prop-types';
import { deleteBookshelf } from '../../helpers/data/bookshelvesData';

export default function BookshelfCard({ setBookshelves, ...bookshelf }) {
  const handleClick = () => {
    deleteBookshelf(bookshelf.firebaseKey).then(setBookshelves);
  };

  return (
    <div className=' rounded shadow-md m-4 w-52 h-64'>
      <h4 className='text-center'>{bookshelf.title}</h4>
      <p className='text-center'>{bookshelf.description}</p>
      <div>
        <button type='button'
            className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('delete')}
            >
              delete
          </button>
      </div>
    </div>
  );
}

BookshelfCard.propTypes = {
  setBookshelves: PropTypes.func
};
