import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App size="40" color="green"/>
    <App color="blue"/>
    <App color="yellow"/>
  </React.StrictMode>,
  document.getElementById('root')
);
