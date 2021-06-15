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
    deleteBookshelf(bookshelf.uid, bookshelf.firebaseKey).then(setBookshelves);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSingleBookshelfBooks(bookshelf.firebaseKey).then((resp) => {
          if (resp.length === 0) {
            deleteBookshelf(bookshelf.uid, bookshelf.firebaseKey).then(setBookshelves);
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
    <div className='max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4'>
      <div className='mt-3'>
        <h4 className='text-center'>{bookshelf.title}</h4>
        <p className='text-center'>{bookshelf.description}</p>
      </div>
      <div className='m-3 flex flex-column flex-end'>
        <span className='cursor-pointer' onClick={() => handleClick('book')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          see books
        </span>
        <span className='cursor-pointer' onClick={() => handleClick('edit')} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          { editing ? 'close' : 'edit shelf' }
        </span>
        <span className='cursor-pointer' onClick={() => handleClick('delete')} >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          delete
        </span>
        <div className='w-auto'>
        {
            editing && <BookshelfForm
            setBookshelves={setBookshelves}
            user={user}
            {...bookshelf}
            />
          }
          </div>
        </div>
      </div>
  );
}

BookshelfCard.propTypes = {
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
