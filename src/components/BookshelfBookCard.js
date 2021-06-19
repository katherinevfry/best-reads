import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { deleteBookshelfRel, getSingleBookshelfBooksByBookId, mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';

export default function BookshelfBookCard({
  setBookshelfBooks, user, ...book
}) {
  const { bookshelfId } = useParams();
  const [heart, setHeart] = useState('');
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

  useEffect(() => {
    switch (book?.rating) {
      case '0':
        setHeart('https://i.imgur.com/fS9vnN7.png');
        break;
      case '1':
        setHeart('https://i.imgur.com/uf4WJ5c.png');
        break;
      case '2':
        setHeart('https://i.imgur.com/OTLU0Ys.png');
        break;
      case '3':
        setHeart('https://i.imgur.com/ZmtXJNh.png');
        break;
      case '4':
        setHeart('https://i.imgur.com/c1kns2H.png');
        break;
      case '5':
        setHeart('https://i.imgur.com/k0pgQ9G.png');
        break;
      default:
        setHeart('https://i.imgur.com/fS9vnN7.png');
    }
  }, [book.rating]);
  return (
    <>
      <div>
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={book.imageUrl} alt={book.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <img className="w-32 object-cover" src={heart} alt={book.rating}></img>
          <p className="text-white text-base">
            {book.review}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2 mb-2 flex justify-center">
        <button type='button'
                  className='bg-darkblue hover:bg-medblue border-2 border-transparent hover:border-white text-white py-2 px-3 rounded-full my-1 shadow-md'
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
