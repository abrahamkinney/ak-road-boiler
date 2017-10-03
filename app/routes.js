import 'babel-polyfill';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage';
import ContainerPage from './components/ContainerPage';


const routes = (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/container' component={ContainerPage}/>
    </Switch>
);


export default routes;
