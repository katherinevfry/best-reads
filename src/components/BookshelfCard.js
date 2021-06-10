import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteBookshelf } from '../helpers/data/bookshelvesData';
import BookshelfForm from './forms/BookshelfForm';
import { deleteBookshelfRel, getSingleBookshelfBooks } from '../helpers/data/bookshelfBooksData';

export default function BookshelfCard({ setBookshelves, user, ...bookshelf }) {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const getAllRels = (taco) => {
    taco.forEach((i) => {
      deleteBookshelfRel(i.firebaseKey).then();
    });
    deleteBookshelf(bookshelf.firebaseKey).then(setBookshelves);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSingleBookshelfBooks(bookshelf.firebaseKey).then((resp) => {
          if (resp.length === 0) {
            deleteBookshelf(bookshelf.firebaseKey).then(setBookshelves);
          } else {
            getAllRels(resp);
          }
        });
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'book':
        history.push(`/bookshelves/${bookshelf.firebaseKey}`);
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
            className='bg-blue-400 hover:bg-blue-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('book')}
            >
              see books
          </button>
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
