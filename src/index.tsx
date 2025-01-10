import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Ensure that 'root' element exists and is of type HTMLElement
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Type assertion to tell TS that this is an HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
