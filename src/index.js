import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDYAS79hbKwIkuxggxZb0VgbGgOmL58ebk",
  authDomain: "tct-store.firebaseapp.com",
  projectId: "tct-store",
  storageBucket: "tct-store.appspot.com",
  messagingSenderId: "656904109951",
  appId: "1:656904109951:web:979555787649e365ace44a",
  measurementId: "G-NRZ3C2BLXM"
};

const app =initializeApp(firebaseConfig);
export const auth= getAuth(app)
initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
