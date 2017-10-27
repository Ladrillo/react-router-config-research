import React, { Component } from 'react';
import styled from 'styled-components';
import * as c from '../../constants';
import * as actions from '../../actions';
import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import { timeOneRoutes } from './timeclockChildren/timeOne';
import { timeTwoRoutes } from './timeclockChildren/timeTwo';

class Timeclock extends Component {
  render() {
    return (
      <div>
        timeclock app
        <li><Link to='/timeclock/1'>child 1</Link></li>
        <li><Link to='/timeclock/2'>child 2</Link></li>
        {
          renderRoutes(this.props.route.routes)
        }
      </div>
    );
  }
}

export const timeclockRoutes = [
  {
    component: Timeclock,
    path: '/timeclock',
    routes: [
      ...timeOneRoutes,
      ...timeTwoRoutes,
    ],
  }
];