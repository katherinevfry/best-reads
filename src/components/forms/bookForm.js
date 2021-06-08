import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Input, Label, Form
} from 'reactstrap';
import { createBook, updateBook } from '../../helpers/data/bookData';

export default function BookForm({ setBooks, user, ...bookObj }) {
  const [book, setBook] = useState({
    title: bookObj?.title || '',
    author: bookObj?.author || '',
    imageUrl: bookObj?.imageUrl || '',
    rating: bookObj?.rating || '',
    review: bookObj?.review || '',
    firebaseKey: bookObj?.firebaseKey || null,
    uid: user.uid,
    public: bookObj?.public || false
  });

  const handleInputChange = (e) => {
    setBook((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'public' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.firebaseKey) {
      updateBook(book.firebaseKey, book).then((booksArray) => setBooks(booksArray));
    } else {
      createBook(book).then((booksArray) => setBooks(booksArray));
    }
  };

  return (
    <div>
      <Form id='addBookForm'
         autoComplete='off'
         onSubmit={handleSubmit}
         >
           <Label>Title</Label>
           <Input name='title'
           type='text'
           value={book.title}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Label>Author</Label>
           <Input name='author'
           type='text'
           value={book.author}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Label>Cover Image</Label>
           <Input name='imageUrl'
           type='text'
           value={book.imageUrl}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Label>review</Label>
           <Input name='review'
           type='text'
           value={book.review}
           onChange={handleInputChange}
           >
           </Input>

           <Label>rating</Label>
           <Input name='rating'
           type='number'
           value={book.rating}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Label>Public</Label>
           <Input name='public'
           type='checkbox'
           checked={book.public}
           onChange={handleInputChange}
           >
           </Input>
           <br/>
           <Button id='submitBtn' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

BookForm.propTypes = {
  setBooks: PropTypes.func,
  user: PropTypes.any,
};
