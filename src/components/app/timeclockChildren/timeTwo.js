import React, { Component } from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';



class TimeTwo extends Component {
  render() {
    return (
      <div>
        timeclock child 2
      </div>
    );
  }
}

export const timeTwoRoutes = [
  {
    component: TimeTwo,
    path: '/timeclock/2',
  }
];