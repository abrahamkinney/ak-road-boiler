import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import ManageForm from './components/ManageForm';


const routes = (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/form' component={ManageForm}/>
    </Switch>
);


export default routes;
