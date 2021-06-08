import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBookshelves = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelves.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createBookshelf = (bookshelfObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/bookshelves.json`, bookshelfObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/bookshelves/${response.data.name}.json`, body)
        .then(() => {
          getBookshelves().then((bookshelfArray) => resolve(bookshelfArray));
        });
    }).catch((error) => reject(error));
});

const deleteBookshelf = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/bookshelves/${firebaseKey}.json`)
    .then(() => getBookshelves().then((bookshelfArray) => resolve(bookshelfArray)))
    .catch((error) => reject(error));
});

const updateBookshelf = (firebaseKey, bookshelfObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/bookshelves/${firebaseKey}.json`, bookshelfObject)
    .then(() => getBookshelves()).then((bookshelfArray) => resolve(bookshelfArray))
    .catch((error) => reject(error));
});

const getSingleBookshelf = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelves/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getBookshelves,
  createBookshelf,
  deleteBookshelf,
  updateBookshelf,
  getSingleBookshelf
};
