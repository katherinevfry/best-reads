import React from 'react';
import { mergeBooksAndSingleShelf } from '../helpers/data/bookshelfBooksData';
import getGoogleBooksData from '../helpers/data/googleBookData';

const grabData = () => {
  // mergeBooksAndShelves().then((resp) => console.warn(resp));
  mergeBooksAndSingleShelf('-MbSCKisDyhUZ0W6VEKB').then((resp) => console.warn(resp));
  getGoogleBooksData('graceling').then((resp) => console.warn(resp));
};

grabData();

export default function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}
