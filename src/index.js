import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'; // Importa o método initializeApp do pacote firebase/app
import firebaseConfig from './firebase.config.js'; // Importa a configuração do Firebase

import { getAuth } from 'firebase/auth';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  // Inicializa o Firebase com a configuração importada
export const auth = getAuth(app); // Inicializa o módulo de autenticação do Firebase

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
