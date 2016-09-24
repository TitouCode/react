'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Home from './modules/home.jsx';
import Swapi from './modules/swapi.jsx';
import SWDetails from './modules/details.jsx';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/:itemType" component={Swapi}/>
    <Route path="/:itemType/:itemName" component={SWDetails}/> 
  </Router>
), document.getElementById('app'));
