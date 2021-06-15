import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Input, Label, Form, FormGroup
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
      updateBook(book.uid, book.firebaseKey, book).then((booksArray) => setBooks(booksArray));
    } else {
      createBook(book.uid, book).then((booksArray) => setBooks(booksArray));
    }
  };

  return (
    <div className='mx-auto'>
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

           <FormGroup tag="fieldset">
            <legend>
              <p>Rating</p>
            </legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="rating" value='1' checked={book.rating === '1'} onChange={handleInputChange} />
                  1
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="rating" value='2' checked={book.rating === '2'} onChange={handleInputChange} />
                  2
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="rating" value='3' checked={book.rating === '3'} onChange={handleInputChange} />
                  3
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="rating" value='4' checked={book.rating === '4'} onChange={handleInputChange} />
                  4
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="rating" value='5' checked={book.rating === '5'} onChange={handleInputChange} />
                  5
                </Label>
              </FormGroup>
            </FormGroup>
          <div className='flex ml-4'>
           <Label>Public</Label>
           <Input name='public'
           type='checkbox'
           checked={book.public}
           onChange={handleInputChange}
           >
           </Input>
           </div>
           <br/>
           <div className='mb-3'>
            <button className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full' id='submitBtn' type='submit'>Submit</button>
           </div>
      </Form>
    </div>
  );
}

BookForm.propTypes = {
  setBooks: PropTypes.func,
  user: PropTypes.any,
};
