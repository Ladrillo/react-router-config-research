import React, { Component } from 'react';
import styled from 'styled-components';
import * as c from '../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const entities = [
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
  },
  {
    a: 1,
    b: 2,
  }
];

import { infoRoutes } from './Info';
import { labelsRoutes } from './Labels';
import { timeclockRoutes } from './Timeclock';
const routes = [...infoRoutes, ...labelsRoutes, ...timeclockRoutes];


const App = (props) => {
  return (
    <div>
      <h1>this is da app</h1>
      <ul>
      </ul>
      <BrowserRouter>
        <div>
          <li><Link to='/info'>info</Link></li>
          <li><Link to='/labels'>labels</Link></li>
          <li><Link to='/timeclock'>timeclock</Link></li>
          {
            renderRoutes(routes, { entities })
          }
        </div>
      </BrowserRouter>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(App);
