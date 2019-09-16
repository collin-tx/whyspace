import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Explore from './components/Explore';
import firebase from 'firebase';
import './App.css';

function App() {

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "whyspace-5d0b1.firebaseapp.com",
    databaseURL: "https://whyspace-5d0b1.firebaseio.com",
    projectId: "whyspace-5d0b1",
    storageBucket: "",
    messagingSenderId: "255342480096",
    appId: process.env.REACT_APP_FIREBASE_ID
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const database = firebase.database();

  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" render={ () => <Home firebase={database} /> } exact />
      <Route path="/explore" render={() => <Explore firebase={database} />} />
    </BrowserRouter>
  );
}

export default App;
