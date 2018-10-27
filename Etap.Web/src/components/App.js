import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import Dashboard from './Dashboard.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import Template from './Template.js';
import FormContainer from './FieldSummaryReport/FormContainer';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route path='/' component={Navbar} />
            <Route exact path='/' component={Dashboard} />
            <Route path='/template' component={Template} />
            <Route path='/FieldSummaryReport/FormContainer' component={FormContainer} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

