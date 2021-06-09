import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BookshelfBookCard from '../components/BookshelfBookCard';
import { mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';

export default function SingleBookshelf({ user, setBooks }) {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const { firebaseKey } = useParams();
  useEffect(() => {
    mergeBooksAndSingleShelf(firebaseKey).then(setBookshelfBooks);
  }, [bookshelfBooks.length]);

  return (
    <div>
      <h1>katy</h1>
      <div>
      {bookshelfBooks.map((book) => (
        <BookshelfBookCard key={book.firebaseKey}
        user={user}
        setBookshelfBooks={setBookshelfBooks}
        setBooks={setBooks}
        {...book}
        />
      ))}
      </div>
    </div>
  );
}

SingleBookshelf.propTypes = {
  user: PropTypes.any,
  setBooks: PropTypes.func,
};
