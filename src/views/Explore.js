import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExploreCard from '../components/ExploreCard';
import { getPublicBooks } from '../helpers/data/bookData';

export default function Explore({ setBooks, user }) {
  const [pubBooks, setPubBooks] = useState([]);
  useEffect(() => {
    getPublicBooks().then(setPubBooks);
  }, []);
  return (
    <div>
      <h1>this is the explore view</h1>
      {pubBooks.map((pubBook) => (
        <ExploreCard key={pubBook.firebaseKey}
        setBooks={setBooks}
        user={user}
        {...pubBook}
        />
      ))}
    </div>
  );
}

Explore.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func
};
