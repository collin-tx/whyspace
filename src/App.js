import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Explore from './components/Explore';
import About from './components/About';
import firebase from 'firebase';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
require('firebase/auth');

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

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  console.log('hi', firebase.auth())

  return (
    <BrowserRouter>
      <Header />
      <Route path="/" render={ () => <Home firebase={firebase} /> } exact />
      <Route path="/explore" render={() => <Explore firebase={database} />} />
      <Route path="/about" render={() => <About firebase={database} />} />
    </BrowserRouter>
  );
}

export default App;
