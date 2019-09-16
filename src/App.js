import React from 'react';
import Home from './components/Home';
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

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
