import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteBookshelf } from '../helpers/data/bookshelvesData';
import BookshelfForm from './forms/BookshelfForm';

export default function BookshelfCard({ setBookshelves, user, ...bookshelf }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteBookshelf(bookshelf.firebaseKey).then(setBookshelves);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing here');
    }
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
          <button type='button'
            className='bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('edit')}
            >
              {editing ? 'close' : 'edit'}
            </button>
          </div>
          {
            editing && <BookshelfForm
            setBookshelves={setBookshelves}
            user={user}
            {...bookshelf}
            />
          }
      </div>
  );
}

BookshelfCard.propTypes = {
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
