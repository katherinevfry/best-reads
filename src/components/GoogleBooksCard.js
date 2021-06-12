import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { createBook } from '../helpers/data/bookData';

export default function GoogleBooksCard({ setBooks, user, ...gb }) {
  const gbObj = {
    firebaseKey: null,
    uid: user.uid,
    author: gb?.volumeInfo?.authors?.toString(),
    imageUrl: gb?.volumeInfo?.imageLinks?.smallThumbnail,
    public: false,
    rating: '',
    review: '',
    title: gb?.volumeInfo?.title
  };

  const history = useHistory();

  const saveBook = () => {
    createBook(gbObj.uid, gbObj).then(setBooks);
    history.push('/books');
  };
  return (
    <div>
      {
        !gb ? '' : <div className="max-w-sm rounded overflow-hidden shadow-md">
          <div className="px-6 py-4">
        <img src={gb?.volumeInfo?.imageLinks?.smallThumbnail}></img>
          <div className="font-bold text-blue-500 text-xl mb-2">
          {gb?.volumeInfo?.title}
          </div>
          <p className="text-gray-700 text-base">{gb?.volumeInfo?.authors}</p>
          <p className="text-gray-700 text-base">{gb?.volumeInfo?.description}</p>
        </div>
        <div className="px-6 py-4">
          <Button onClick={saveBook}>save book</Button>
        </div>
    </div>
      }
    </div>
  );
}

GoogleBooksCard.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func
};
