import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero';

export default function Home({ user, books }) {
  return (
  <>
    <div>
      {user && <div>
      <div className="lg:w-1/3 h-32 w-full m-4 bg-medblue mx-auto shadow-lg rounded-tl-lg rounded-tr-lg rounded-br-lg">
        <h2 className="text-center pt-4 lg:p-9">Welcome home, {user.fullName}</h2>
      </div>
      <h3 className="ml-12">recently added</h3>
      <div className="mb-16 mx-12 p-6 flex flex-row flex-wrap justify-center rounded-xl bg-medblue shadow-lg">
        {
        books
          ? books?.map((book) => (
            <img src={book.imageUrl} alt={book.title} key={book.firebaseKey} className="m-2 shadow-sm transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110"></img>
          ))
          : <p>add some books to get started</p>
        }
      </div>
    </div>
      }

      {!user && <div>
        <Hero />
      </div>
      }
    </div>
  </>
  );
}

Home.propTypes = {
  user: PropTypes.any,
  books: PropTypes.array
};
