import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcXNDJQ3x4-jan5Lo5F5AA63DJCyTW05E",
  authDomain: "coderhouse-shoestore.firebaseapp.com",
  projectId: "coderhouse-shoestore",
  storageBucket: "coderhouse-shoestore.appspot.com",
  messagingSenderId: "1089365841050",
  appId: "1:1089365841050:web:2010b217cfe7b1bb0c7b23",
  measurementId: "G-SDSCHGGB77"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
