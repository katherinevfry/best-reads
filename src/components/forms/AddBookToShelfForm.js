import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Form, Input, Label
} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { createBookshelfBooks } from '../../helpers/data/bookshelfBooksData';

export default function AddBookToShelfForm({ books, setBookshelfBooks, bookshelfBooks }) {
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
    <div>
    <Form onSubmit={handleSubmit}>
      <Label>Book</Label>
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
        <Button type='submit'>add book</Button>
      </Form>
    </div>
  );
}

AddBookToShelfForm.propTypes = {
  books: PropTypes.array,
  setBookshelfBooks: PropTypes.func,
  bookshelfBooks: PropTypes.array
};
