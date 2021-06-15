import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'reactstrap';
import GoogleBooksCard from '../components/GoogleBooksCard';
import getGoogleBooksData from '../helpers/data/googleBookData';

export default function Search({ user }) {
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
    <>
    <div className="w-96 mb-5 bg-medblue mx-auto shadow-lg rounded-tl-lg rounded-tr-lg rounded-br-lg">
      <div className='p-6 mx-auto mt-5'>
        <Form className = "form" onSubmit={handleSubmit}>
          <Input id='param' placeholder="book title" value={param} onChange={handleUserInput}>
          </Input>
          <button
          className='bg-red-400 hover:bg-red-500 text-white shadow-sm mt-2 py-2 px-3 rounded-full'
          type="submit"
          >
            Submit
        </button>
        </Form>
      </div>
    </div>
      <div className="flex flex-row flex-wrap justify-center">
      {googleBooks.map((gb) => (
        <GoogleBooksCard key={gb.id}
        user={user}
        {...gb}
        />
      ))}
      </div>
    </>
  );
}

Search.propTypes = {
  user: PropTypes.any
};
