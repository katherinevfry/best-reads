import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ExploreCard from '../components/ExploreCard';
import { getPublicBooks } from '../helpers/data/bookData';

export default function Explore({ user }) {
  const [pubBooks, setPubBooks] = useState([]);
  useEffect(() => {
    getPublicBooks().then(setPubBooks);
  }, []);
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center">
      {pubBooks.map((pubBook) => (
        <ExploreCard key={pubBook.firebaseKey}
        user={user}
        {...pubBook}
        />
      ))}
      </div>
    </div>
  );
}

Explore.propTypes = {
  user: PropTypes.any,
};
