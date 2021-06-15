import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BookshelfBookCard from '../components/BookshelfBookCard';
import { mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';
import AddBookToShelfForm from '../components/forms/AddBookToShelfForm';

export default function SingleBookshelf({ user }) {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const { firebaseKey } = useParams();
  useEffect(() => {
    mergeBooksAndSingleShelf(user.uid, firebaseKey).then(setBookshelfBooks);
  }, [bookshelfBooks.length]);

  return (
    <div>
      <div className="mx-auto w-96">
      <AddBookToShelfForm user={user} setBookshelfBooks={setBookshelfBooks} bookshelfBooks={bookshelfBooks}/>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
      {bookshelfBooks.map((book) => (
        <BookshelfBookCard key={book?.firebaseKey}
        user={user}
        setBookshelfBooks={setBookshelfBooks}
        bookshelfBooks={bookshelfBooks}
        {...book}
        />
      ))}
      </div>
    </div>
  );
}

SingleBookshelf.propTypes = {
  user: PropTypes.any,
};
