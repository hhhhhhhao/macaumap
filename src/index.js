import React from 'react';
import ReactDOM from 'react-dom';
import MacauMap from './pages/macau';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <MacauMap />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
