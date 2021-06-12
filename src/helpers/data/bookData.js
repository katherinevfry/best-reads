import axios from 'axios';
import { firebaseConfig } from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createBook = (bookObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, bookObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/books/${response.data.name}.json`, body)
        .then(() => {
          getBooks().then((booksArray) => resolve(booksArray));
        });
    }).catch((error) => reject(error));
});

const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => getBooks().then((booksArray) => resolve(booksArray)))
    .catch((error) => reject(error));
});

const updateBook = (firebaseKey, bookObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${firebaseKey}.json`, bookObject)
    .then(() => getBooks()).then((booksArray) => resolve(booksArray))
    .catch((error) => reject(error));
});

const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
  getSingleBook
};
