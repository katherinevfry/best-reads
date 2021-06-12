import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { createBook } from '../helpers/data/bookData';

export default function ExploreCard({ setBooks, user, ...pubBook }) {
  const newBookObj = {
    firebaseKey: null,
    uid: user.uid,
    author: pubBook.author,
    imageUrl: pubBook.imageUrl,
    public: false,
    rating: '',
    review: '',
    title: pubBook.title
  };

  const history = useHistory();

  const saveBook = () => {
    createBook(user.uid, newBookObj).then(setBooks);
    history.push('/books');
  };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-md">
          <div className="px-6 py-4">
        <img src={pubBook?.imageUrl}></img>
          <div className="font-bold text-blue-500 text-xl mb-2">
          {pubBook?.title}
          </div>
          <p className="text-gray-700 text-base">{pubBook?.author}</p>
          <p className="text-gray-700 text-base">{pubBook?.rating}</p>
          <p className="text-gray-700 text-base">{pubBook?.review}</p>
        </div>
        <div className="px-6 py-4">
          {
          user.uid !== pubBook.uid && <Button onClick={saveBook}>save book</Button>
          }
        </div>
    </div>
    </div>
  );
}

ExploreCard.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func
};
