import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createBook } from '../helpers/data/bookData';

export default function GoogleBooksCard({ user, ...gb }) {
  const gbObj = {
    firebaseKey: null,
    uid: user.uid,
    userImg: user.profileImage,
    userName: user.userName,
    author: gb?.volumeInfo?.authors?.toString(),
    imageUrl: gb?.volumeInfo?.imageLinks?.smallThumbnail,
    public: false,
    rating: '',
    review: '',
    title: gb?.volumeInfo?.title
  };

  const history = useHistory();

  const saveBook = () => {
    createBook(gbObj.uid, gbObj).then(history.push('/books'));
  };
  return (
    <div>
      <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={gb?.volumeInfo?.imageLinks?.smallThumbnail} alt={gb?.volumeInfo?.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{gb?.volumeInfo?.title}</div>
          <p className="text-white text-base">
              {gb?.volumeInfo?.authors}
          </p>
          <p className="text-white text-base">
              {gb?.volumeInfo?.description}
          </p>
        </div>
        <div className="px-6 py-4">
          <button className='bg-red-400 hover:bg-red-400 text-white shadow-md py-2 px-3 rounded-full' onClick={saveBook}>save book</button>
        </div>
      </div>
    </div>
  );
}

GoogleBooksCard.propTypes = {
  user: PropTypes.any
};
