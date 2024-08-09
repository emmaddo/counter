import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Instruction from './instruction';
import Questions from './questions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Instruction />
    <App />
    <Questions />
  </React.StrictMode>
);

reportWebVitals();
