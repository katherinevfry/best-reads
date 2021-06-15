import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createBook } from '../helpers/data/bookData';

export default function ExploreCard({ user, ...pubBook }) {
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
    createBook(user.uid, newBookObj).then(history.push('/books'));
  };
  return (
    <>
      <div>
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={pubBook?.imageUrl} alt={pubBook?.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pubBook?.title}</div>
          <p className="text-white text-base">
            {pubBook?.rating}/5
          </p>
          <p className="text-white text-base">
            {pubBook?.review}
          </p>
        </div>
        <div className="px-6 py-4">
          {
          user.uid !== pubBook.uid && <button className='bg-red-400 hover:bg-red-400 text-white shadow-md py-2 px-3 rounded-full' onClick={saveBook}>save book</button>
          }
        </div>
        </div>
      </div>
    </>
  );
}

ExploreCard.propTypes = {
  user: PropTypes.any,
};
