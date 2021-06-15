import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteBook } from '../helpers/data/bookData';
import { getSingleBookshelfBooksByBookId, deleteBookshelfRel } from '../helpers/data/bookshelfBooksData';
import BookForm from './forms/bookForm';

export default function BookCard({ setBooks, user, ...book }) {
  const [editing, setEditing] = useState(false);
  const getAllRels = (taco) => {
    taco.forEach((i) => {
      deleteBookshelfRel(i.firebaseKey).then();
    });
    deleteBook(book.uid, book.firebaseKey).then(setBooks);
  };

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSingleBookshelfBooksByBookId(book.firebaseKey)
          .then((resp) => {
            if (resp.length === 0) {
              deleteBook(book.uid, book.firebaseKey).then(setBooks);
            } else {
              getAllRels(resp);
            }
          });
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing here');
    }
  };

  return (
    <>
      <div>
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={book.imageUrl} alt={book.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-white text-base">
            {book.rating}/5
          </p>
          <p className="text-white text-base">
            {book.review}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mb-2">
        <button type='button'
                  className='bg-red-400 hover:bg-red-500 text-white shadow-md py-2 px-3 rounded-full'
                  onClick={() => handleClick('delete')}
                  >
                    delete
                  </button>
                  <button type='button'
                  className='bg-red-400 hover:bg-red-400 text-white shadow-md py-2 px-3 rounded-full'
                  onClick={() => handleClick('edit')}
                  >
                    {editing ? 'close' : 'edit'}
                  </button>
                </div>
                <div className="w-60 mx-auto">
                {
                  editing && <BookForm
                  setBooks={setBooks}
                  user={user}
                  {...book}
                  />
                }
                </div>
        </div>
      </div>
    </>
  );
}

BookCard.propTypes = {
  book: PropTypes.object,
  user: PropTypes.any,
  setBooks: PropTypes.func
};
