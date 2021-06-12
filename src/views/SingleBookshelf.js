import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import BookshelfBookCard from '../components/BookshelfBookCard';
import { mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';
import AddBookToShelfForm from '../components/forms/AddBookToShelfForm';

export default function SingleBookshelf({ user, setBooks, books }) {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);
  const { firebaseKey } = useParams();
  useEffect(() => {
    mergeBooksAndSingleShelf(user.uid, firebaseKey).then(setBookshelfBooks);
  }, [bookshelfBooks.length]);

  return (
    <div>
      <h1>katy</h1>
      <AddBookToShelfForm user={user} setBookshelfBooks={setBookshelfBooks} books={books} bookshelfBooks={bookshelfBooks}/>
      <div>
      {bookshelfBooks.map((book) => (
        <BookshelfBookCard key={book?.firebaseKey}
        user={user}
        books={books}
        setBookshelfBooks={setBookshelfBooks}
        setBooks={setBooks}
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
  setBooks: PropTypes.func,
  books: PropTypes.array
};
