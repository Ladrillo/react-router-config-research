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


import { infoRoutes } from './Info';
import { labelsRoutes } from './Labels';
import { timeclockRoutes } from './Timeclock';


const Root = (props) => {
  return (
    <div>
      <h1>this is da root</h1>
      <ul>
        <li><Link to='/info'>info</Link></li>
        <li><Link to='/labels'>labels</Link></li>
        <li><Link to='/timeclock'>timeclock</Link></li>
      </ul>
      {
        renderRoutes(props.route.routes)
      }
    </div>
  );
};

const routes = [
  {
    component: Root,
    path: '/',
    routes: [ ...infoRoutes, ...labelsRoutes, ...timeclockRoutes ]
  }
];

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {
          renderRoutes(routes)
        }
      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(App);
