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


export class Info extends Component {
  render() {
    return (
      <div>
        info app
        {
          renderRoutes(this.props.routes)
        }
      </div>
    );
  }
}

export const infoRoutes = [
  {
    component: Info,
    path: '/info',
  }
];