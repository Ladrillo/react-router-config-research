import React, { Component } from 'react';
import styled from 'styled-components';
import { renderRoutes } from 'react-router-config';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';



class TimeOne extends Component {
  render() {
    return (
      <div>
        timeclock child 1
      </div>
    );
  }
}

export const timeOneRoutes = [
  {
    component: TimeOne,
    path: '/timeclock/1',
  }
];
