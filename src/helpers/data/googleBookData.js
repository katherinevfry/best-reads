import axios from 'axios';
// import firebaseConfig from '../apiKeys';

const dbUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

const getGoogleBooksData = (param) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${param}&fields=items(id,volumeInfo)`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getGoogleBooksData;
