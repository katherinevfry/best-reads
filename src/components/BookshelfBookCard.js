import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { deleteBookshelfRel, getSingleBookshelfBooksByBookId, mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';
import BookForm from './forms/bookForm';

export default function BookshelfBookCard({
  setBooks, setBookshelfBooks, user, ...book
}) {
  const [editing, setEditing] = useState(false);
  const { bookshelfId } = useParams();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        getSingleBookshelfBooksByBookId(book.firebaseKey)
          .then((resp) => deleteBookshelfRel(resp[0].firebaseKey)
            .then()
            .then(mergeBooksAndSingleShelf(user.uid, bookshelfId)
              .then(setBookshelfBooks)));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing here');
    }
  };
  return (
    <div className='boookCard rounded bg-white w-1/3 shadow-md m-3'>
        <div className='flex'>
          <img src={book?.imageUrl} alt={book?.title} className='w-48 object-scale-down rounded m-auto px-6 py-4'></img>
          <div className="px-6 py-4">
            <h5>{book?.title}</h5>
            <h6>{book?.author}</h6>
            <p>{book?.rating}/5</p>
            <p>{book?.review}</p>
          </div>
        </div>
        <div className='buttonDiv px-6 py-4 flex justify-end'>
            <button type='button'
            className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('delete')}
            >
              remove from shelf
            </button>
            <button type='button'
            className='bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('edit')}
            >
              {editing ? 'close' : 'edit'}
            </button>
          </div>
          {
            editing && <BookForm
            setBooks={setBooks}
            user={user}
            {...book}
            />
          }
      </div>
  );
}

BookshelfBookCard.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func,
  setBookshelfBooks: PropTypes.func,
};
