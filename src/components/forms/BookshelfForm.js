import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Label, Button
} from 'reactstrap';
import { createBookshelf, updateBookshelf } from '../../helpers/data/bookshelvesData';

export default function BookshelfForm({ setBookshelves, user, ...bookshelfObj }) {
  const [bookshelf, setBookshelf] = useState({
    title: bookshelfObj?.title || '',
    description: bookshelfObj?.description || '',
    firebaseKey: bookshelfObj?.firebaseKey || null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookshelf.firebaseKey) {
      updateBookshelf(bookshelf.firebaseKey, bookshelf).then(setBookshelves);
    } else {
      createBookshelf(bookshelf).then((bookshelvesArray) => setBookshelves(bookshelvesArray));
    }
  };

  const handleInputChange = (e) => {
    setBookshelf((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
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
           value={bookshelf.title}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Label>Description</Label>
           <Input name='description'
           type='text'
           value={bookshelf.description}
           onChange={handleInputChange}
           >
           </Input>
           <br/>

           <Button id='submitBtn' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

BookshelfForm.propTypes = {
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
