import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as ServiceWorker from './serviceWorker';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "YOUR API KEY",
  authDomain: "authDomain",
  databaseURL: "DB URL",
  projectId: "cart-c9043",
  storageBucket: "cart-c9043.appspot.com",
  messagingSenderId: "713196389521",
  appId: "1:713196389521:web:e75a197525663b040c2b30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ServiceWorker.unregister();
