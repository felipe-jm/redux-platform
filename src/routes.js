import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import history from './services/history';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
      </Router>
    </BrowserRouter>
  );
}
