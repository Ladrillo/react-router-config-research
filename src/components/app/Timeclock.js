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


export class Timeclock extends Component {
  render() {
    return (
      <div>
        timeclock app
        {
          renderRoutes(this.props.routes)
        }
      </div>
    );
  }
}

export const timeclockRoutes = [
  {
    component: Timeclock,
    path: '/timeclock',
  }
];