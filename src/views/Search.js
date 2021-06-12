import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Form } from 'reactstrap';
import GoogleBooksCard from '../components/GoogleBooksCard';
import getGoogleBooksData from '../helpers/data/googleBookData';

export default function Search({ setBooks, user }) {
  const [googleBooks, setGoogleBooks] = useState([]);
  const [param, setParam] = useState('');

  const getBookData = () => {
    getGoogleBooksData(param).then((resp) => setGoogleBooks(resp.items));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setParam('');
    getBookData();
  };

  const handleUserInput = (e) => {
    setParam(e.target.value);
  };
  return (
    <div>
      <h1>this is the search view</h1>
      <Form className = "form" onSubmit={handleSubmit}>
        <Input id='param' placeholder="book title" value={param} onChange={handleUserInput}>
        </Input>
        <Button
        type="submit"
        outline color="dark">
          Submit
      </Button>
      </Form>
      {googleBooks.map((gb) => (
        <GoogleBooksCard key={gb.id}
        setBooks={setBooks}
        user={user}
        {...gb}
        />
      ))}
    </div>
  );
}

Search.propTypes = {
  setBooks: PropTypes.func,
  user: PropTypes.any
};
