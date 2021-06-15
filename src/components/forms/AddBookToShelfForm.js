import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Label
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { createBookshelfBooks } from '../../helpers/data/bookshelfBooksData';
import { getBooks } from '../../helpers/data/bookData';

export default function AddBookToShelfForm({ setBookshelfBooks, bookshelfBooks, user }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks(user.uid).then(setBooks);
  }, []);
  const { firebaseKey } = useParams();
  const [bookshelfBook, setBookshelfBook] = useState({
    bookshelfId: firebaseKey,
    bookId: ''
  });

  const result = bookshelfBooks.map((bb) => bb.firebaseKey);
  const booksNotHere = books.filter(({ firebaseKey: key }) => !result.includes(key));

  const handleSubmit = (e) => {
    e.preventDefault();
    createBookshelfBooks(bookshelfBook).then(setBookshelfBooks);
  };

  const handleInputChange = (e) => {
    setBookshelfBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mt-4">
    <Form onSubmit={handleSubmit}>
      <Label>Add a Book</Label>
           <Input name='bookId'
           type='select'
           value={bookshelfBook.bookId}
           placeholder="select a book"
           onChange={handleInputChange}
           >
          <option value=''>Select a Book</option>
          {booksNotHere?.map((book) => (
            <option key={book.firebaseKey} value={book.firebaseKey}>
              {book.title} - {book.author}
            </option>
          ))}
        </Input>
        <button className='bg-red-400 hover:bg-red-500 text-white shadow-md py-2 px-3 mt-3 rounded-full'type='submit'>add book</button>
      </Form>
    </div>
  );
}

AddBookToShelfForm.propTypes = {
  user: PropTypes.any,
  setBookshelfBooks: PropTypes.func,
  bookshelfBooks: PropTypes.array
};
