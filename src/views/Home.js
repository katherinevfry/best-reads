import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/Hero';

export default function Home({ user }) {
  return (
    <div className="w-full">
      {user && <div className="lg:w-1/3 h-32 w-full m-4 bg-medblue mx-auto shadow-lg rounded-tl-lg rounded-tr-lg rounded-br-lg">
        <h2 className="text-center pt-4 lg:p-9">Welcome home, {user.fullName}</h2>
      </div>
      }

      {!user && <div>
        <Hero />
      </div>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
