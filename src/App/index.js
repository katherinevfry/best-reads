import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar';
import './App.scss';
import Routes from '../helpers/Routes';
import { getUserbyUid, createUser } from '../helpers/data/userData';
import { getBooks } from '../helpers/data/bookData';
import { getBookshelves } from '../helpers/data/bookshelvesData';

function App() {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState([]);
  const [bookshelves, setBookshelves] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          userName: authed.email.split('@')[0]
        };
        getUserbyUid(authed.uid).then((response) => {
          if (Object.values(response.data).length === 0) {
            createUser(userInfoObj).then((resp) => setUser(resp));
          } else {
            setUser(userInfoObj);
          }
        });
        getBooks(authed.uid).then((booksArray) => setBooks(booksArray));
        getBookshelves(authed.uid).then((bookshelvesArray) => {
          if (bookshelvesArray !== null) {
            setBookshelves(bookshelvesArray);
          } else {
            console.warn('help');
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Routes user={user}
        books={books}
        setBooks={setBooks}
        bookshelves={bookshelves}
        setBookshelves={setBookshelves}
        />
      </Router>
    </div>
  );
}

export default App;
