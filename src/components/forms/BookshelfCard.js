import React from 'react';
// import PropTypes from 'prop-types';

export default function BookshelfCard({ ...bookshelf }) {
  return (
    <div>
      <div>
        <h3>{bookshelf.title}</h3>
        <p>{bookshelf.description}</p>
      </div>
    </div>
  );
}
