import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from "./components/App";
import Routes from "./routes";
import HomePage from './components/HomePage';
import ManageForm from './components/ManageForm';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <div>
    <App>
      <BrowserRouter>
        { Routes }
      </BrowserRouter>

    </App>
</div>, rootElement
);
