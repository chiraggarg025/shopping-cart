import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as ServiceWorker from './serviceWorker';
import 'firebase/firestore';
const firebaseConfig = {
  // configure your firebase here
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

ServiceWorker.unregister();
