import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      {user && <h2>Welcome home, {user.fullName}</h2>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
