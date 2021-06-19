import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookshelfForm from '../components/forms/BookshelfForm';
import BookshelfCard from '../components/BookshelfCard';
import { getBookshelves } from '../helpers/data/bookshelvesData';

export default function BookshelvesView({ user }) {
  const [editing, setEditing] = useState(false);
  const [bookshelves, setBookshelves] = useState([]);
  useEffect(() => {
    getBookshelves(user.uid).then(setBookshelves);
  }, [bookshelves]);
  const seeForm = () => {
    setEditing((prevState) => !prevState);
  };

  return (
    <div>
      <div className='flex justify-center m-3'>
        <button type='button'
        className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
        onClick={seeForm}>
          {editing ? 'close form' : '+ add a bookshelf'}
        </button>
      </div>

    <div className="w-80 mx-auto">
      {
      editing && <BookshelfForm
      setBookshelves={setBookshelves}
      user={user}
      seeForm={seeForm}
      />
      }
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {bookshelves?.map((bookshelf) => (
      <BookshelfCard key={bookshelf.firebaseKey}
      setBookshelves={setBookshelves}
      {...bookshelf}
      />
        ))}
      </div>
    </div>
  );
}

BookshelvesView.propTypes = {
  bookshelves: PropTypes.array,
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
