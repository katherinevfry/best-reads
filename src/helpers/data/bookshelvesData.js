import axios from 'axios';
import { firebaseConfig } from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getBookshelves = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/bookshelves.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createBookshelf = (uid, bookshelfObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/bookshelves.json`, bookshelfObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/bookshelves/${response.data.name}.json`, body)
        .then(() => {
          getBookshelves(uid).then((bookshelfArray) => resolve(bookshelfArray));
        });
    }).catch((error) => reject(error));
});

const deleteBookshelf = (uid, firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/bookshelves/${firebaseKey}.json`)
    .then(() => getBookshelves(uid).then((bookshelfArray) => resolve(bookshelfArray)))
    .catch((error) => reject(error));
});

const updateBookshelf = (uid, firebaseKey, bookshelfObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/bookshelves/${firebaseKey}.json`, bookshelfObject)
    .then(() => getBookshelves(uid)).then((bookshelfArray) => resolve(bookshelfArray))
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
