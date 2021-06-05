import axios from 'axios';
import firebaseConfig from '../apiKeys';
// import { getBookshelves } from './bookshelvesData';

const dbUrl = firebaseConfig.databaseURL;

const getBookshelfBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleBookshelfBooks = (bookshelfId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books.json?orderBy="bookshelfId"&equalTo="${bookshelfId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createBookshelfBooks = (bookshelfBookObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/bookshelf-books.json`, bookshelfBookObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/bookshelf-books/${response.data.name}.json`, body)
        .then(() => {
          getBookshelfBooks().then((array) => resolve(array));
        });
    }).catch((error) => reject(error));
});

// const updateBookshelfBooks = (firebaseKey, bookshelfBookObj) => new Promise((resolve, reject) => {
//   axios.patch(`${dbUrl}/bookshelf-books.json?orderBy="bookshelfId"&equalTo="${firebaseKey}"`, bookshelfBookObj)
//     .then(() => getBookshelfBooks()).then((response) => resolve(response))
//     .catch((error) => reject(error));
// });

const deleteBookshelfRel = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/bookshelf-books/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// const mergeBooksAndShelves = (bookshelfId) => new Promise((resolve, reject) => {
//   Promise.all([getBookshelves(), getSingleBookshelfBooks(bookshelfId)])
//     .then(([bookshelves, bookshelfBooks]) => {
//       const allBookshelvesArray = bookshelves.map((bookshelf) => {
//         const bookshelfRelsArray = bookshelfBooks.filter((bk) => bk.bookshelfId === bookshelf.firebaseKey);
//         return { ...bookshelf, books: bookshelfRelsArray };
//       });
//       resolve(allBookshelvesArray);
//     }).catch((error) => reject(error));
// });

export {
  getBookshelfBooks,
  createBookshelfBooks,
  deleteBookshelfRel,
  // mergeBooksAndShelves,
  getSingleBookshelfBooks
};
