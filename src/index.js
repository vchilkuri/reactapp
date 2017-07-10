import React from 'react';
import ReactDOM from 'react-dom';
import { FetchDemo, Nav, Contact } from './App';
import {
  BrowserRouter as Router,
  Route,
  hashHistory
} from 'react-router-dom';

ReactDOM.render(
  <Router history={hashHistory}>
  <div>
    <Route path="/" component={Nav}/>
    <Route path="/home" component={FetchDemo}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/nav" component={Nav}/>
  </div>
  </Router>,
  document.getElementById('root')
);
