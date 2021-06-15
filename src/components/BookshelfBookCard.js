import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { deleteBookshelfRel, getSingleBookshelfBooksByBookId, mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';

export default function BookshelfBookCard({
  setBookshelfBooks, user, ...book
}) {
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
                    remove from shelf
                  </button>
                </div>
        </div>
      </div>
    </>
  );
}

BookshelfBookCard.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func,
  setBookshelfBooks: PropTypes.func,
};
