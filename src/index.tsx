import React from 'react';
import ReactDOM from 'react-dom/client';
import UserContainer from './User/UserContainer';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContainer />
);
