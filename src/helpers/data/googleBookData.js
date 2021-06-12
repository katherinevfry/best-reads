import axios from 'axios';
import { googleApi } from '../apiKeys';

const dbUrl = googleApi.googleBooksUrl;

const getGoogleBooksData = (param) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}${param}&fields=items(id,volumeInfo)`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export default getGoogleBooksData;
