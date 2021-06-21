import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getSingleBook } from '../helpers/data/bookData';

export default function ShareBook({ user }) {
  const [shareBook, setShareBook] = useState([]);
  const [heart, setHeart] = useState('');
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleBook(firebaseKey).then(setShareBook);
    switch (shareBook.rating) {
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
  }, [shareBook.rating]);

  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="max-w-sm bg-medblue shadow-lg rounded overflow-hidden w-72 m-4">
        <img className="w-44 mx-auto mt-2 rounded-md" src={shareBook?.imageUrl} alt={shareBook?.title}></img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{shareBook?.title}</div>
          <img className="w-32 object-cover" src={heart} alt={shareBook?.rating}></img>
          <p className="text-white text-base">
            {shareBook?.review}
          </p>
        </div>
        <div className="px-6 py-2 flex flex-row flex-nowrap">
          <img className="rounded-full h-10 w-10" src={shareBook?.userImg} alt={shareBook?.userName}></img>
          <p className="self-center pl-2 pt-2">{shareBook?.userName}</p>
        </div>
        <div className="py-4 px-6 flex">
          <a className="twitter-share-button text-white"
          href={`https://twitter.com/intent/tweet?text=Check%20out%20${shareBook.title}%20by%20${shareBook.author}!%20https://best-reads.netlify.app/books/${shareBook.firebaseKey}`}
          >
            <button className='bg-darkblue hover:bg-medblue border-2 border-transparent hover:border-white text-white py-2 px-3 rounded-full my-1 shadow-md'>
            tweet this review
            </button>
          </a>
        </div>
        <div>
          {
            !user && (
              <p>sign up for BestReads!</p>
            )
          }
        </div>
        </div>
      </div>
    </>
  );
}

ShareBook.propTypes = {
  user: PropTypes.any
};
