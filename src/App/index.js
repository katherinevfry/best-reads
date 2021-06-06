import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar';
import './App.scss';
import Routes from '../helpers/Routes';

// getUserbyUid(authed.uid).then((response) => {
//   if (Object.values(response.data).length === 0) {
//     createUser(userInfoObj).then((resp) => setUser(resp));
//   } else {
//     setUser(userInfoObj);
//   }
// });

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          userName: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <NavBar user={user}/>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
