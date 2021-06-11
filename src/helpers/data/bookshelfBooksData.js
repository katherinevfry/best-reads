import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getBooks } from './bookData';
import { getBookshelves } from './bookshelvesData';

const dbUrl = firebaseConfig.databaseURL;

const getBookshelfBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getSingleBookshelfBooks = (bookshelfId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books.json?orderBy="bookshelfId"&equalTo="${bookshelfId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleBookshelfBooksByBookId = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books.json?orderBy="bookId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleBookshelfBookRel = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelf-books/${firebaseKey}.json`)
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

const deleteBookshelfRel = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/bookshelf-books/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const mergeBooksAndShelves = () => new Promise((resolve, reject) => {
  Promise.all([getBooks(), getBookshelves(), getBookshelfBooks()])
    .then(([books, bookshelves, bookshelfBooks]) => {
      console.warn(books, bookshelves, bookshelfBooks);
      const allBookshelfInfoArray = bookshelves.map((bookshelf) => {
        const bookshelfRelArray = bookshelfBooks.filter((bb) => bb.bookshelfId === bookshelf.firebaseKey);

        const bookInfoArray = bookshelfRelArray.map((bookshelfRel) => books.find((book) => book.firebaseKey === bookshelfRel.bookId));

        return { ...bookshelf, books: bookInfoArray };
      });

      resolve(allBookshelfInfoArray);
    }).catch((error) => reject(error));
});

const mergeBooksAndSingleShelf = (firebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getBooks(), getBookshelfBooks()])
    .then(([books, bookshelfBooks]) => {
      const bookshelfRelArray = bookshelfBooks.filter((bb) => bb.bookshelfId === firebaseKey);
      const bookInfoArray = bookshelfRelArray.map((bookshelfRel) => books.find((book) => book.firebaseKey === bookshelfRel.bookId));

      resolve(bookInfoArray);
    }).catch((error) => reject(error));
});

export {
  getBookshelfBooks,
  createBookshelfBooks,
  deleteBookshelfRel,
  getSingleBookshelfBooks,
  getSingleBookshelfBooksByBookId,
  getSingleBookshelfBookRel,
  mergeBooksAndShelves,
  mergeBooksAndSingleShelf
};
