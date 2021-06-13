import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Input, Label
} from 'reactstrap';
import { createBookshelf, updateBookshelf } from '../../helpers/data/bookshelvesData';

export default function BookshelfForm({ setBookshelves, user, ...bookshelfObj }) {
  const [bookshelf, setBookshelf] = useState({
    title: bookshelfObj?.title || '',
    description: bookshelfObj?.description || '',
    firebaseKey: bookshelfObj?.firebaseKey || null,
    uid: user?.uid
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookshelf.firebaseKey) {
      updateBookshelf(bookshelf.uid, bookshelf.firebaseKey, bookshelf).then(setBookshelves);
    } else {
      createBookshelf(user.uid, bookshelf).then((bookshelvesArray) => setBookshelves(bookshelvesArray));
    }
  };

  const handleInputChange = (e) => {
    setBookshelf((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className='w-96 mx-auto'>
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
           <div className='mb-3'>
            <button className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full' id='submitBtn' type='submit'>Submit</button>
           </div>
      </Form>
    </div>
  );
}

BookshelfForm.propTypes = {
  setBookshelves: PropTypes.func,
  user: PropTypes.any
};
