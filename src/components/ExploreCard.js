import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createBook } from '../helpers/data/bookData';

export default function ExploreCard({ user, ...pubBook }) {
  const newBookObj = {
    firebaseKey: null,
    uid: user.uid,
    userImg: user.profileImage,
    userName: user.userName,
    author: pubBook.author,
    imageUrl: pubBook.imageUrl,
    public: false,
    rating: '',
    review: '',
    title: pubBook.title
  };

  const history = useHistory();
  const [heart, setHeart] = useState('');
  const saveBook = () => {
    createBook(user.uid, newBookObj).then(history.push('/books'));
  };

  useEffect(() => {
    switch (pubBook?.rating) {
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
  }, [pubBook.rating]);

  return (
    <>
      <div>
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={pubBook?.imageUrl} alt={pubBook?.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{pubBook?.title}</div>
          <img className="w-32 object-cover" src={heart} alt={pubBook?.rating}></img>
          <p className="text-white text-base">
            {pubBook?.review}
          </p>
        </div>
        <div className="px-6 py-4">
          {
          user.uid !== pubBook.uid && <button className='bg-red-400 hover:bg-red-400 text-white shadow-md py-2 px-3 rounded-full' onClick={saveBook}>save book</button>
          }
        </div>
        <div className="px-6 py-2 flex flex-row flex-nowrap">
          <img className="rounded-full h-10 w-10" src={pubBook?.userImg} alt={pubBook?.userName}></img>
          <p className="self-center pl-2 pt-2">{pubBook?.userName}</p>
        </div>
        <div>
          {
            user.uid === pubBook.uid && (
              <div>
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-text="Check out this book review!" data-url={`https://best-reads.netlify.app/books/${pubBook.firebaseKey}`} data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
              </div>
            )
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
