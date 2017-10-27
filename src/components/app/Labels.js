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

import { LabelsOne } from './labelsChildren/labelsOne'
import { LabelsTwo } from './labelsChildren/labelsTwo'

class Labels extends Component {
  render() {
    return (
      <div>
        labels app
        <li><Link to='/labels/1'>child 1</Link></li>
        <li><Link to='/labels/2'>child 2</Link></li>
        {
          renderRoutes(this.props.route.routes)
        }
      </div>
    );
  }
}

export const labelsRoutes = [
  {
    component: Labels,
    path: '/labels',
    routes: [
      {
        path: '/labels/1',
        component: LabelsOne
      },
      {
        path: '/labels/2',
        component: LabelsTwo
      },
    ]
  }
];