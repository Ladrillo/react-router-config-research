import React, { Component } from 'react';
import styled from 'styled-components';
import * as c from '../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';


const Home = (props) => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = (props) => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = (props) => (
  <div>
    <h3>{props.match.params.topicId}</h3>
  </div>
);

const Topics = (props) => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${props.match.url}/rendering`}>
            Rendering with React
        </Link>
        </li>
        <li>
          <Link to={`${props.match.url}/components`}>
            Components
        </Link>
        </li>
        <li>
          <Link to={`${props.match.url}/props-v-state`}>
            Props v. State
        </Link>
        </li>
      </ul>

      {
        renderRoutes(props.route.routes)
      }
    </div>
  );
};

const Root = (props) => {
  return (
    <div>
      <h1>this is da root</h1>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
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
    someRandomProp: 'meh', // root component has access to this through props.route
    routes: [
      {
        path: '/home',
        exact: false,
        component: Home,
      },
      {
        path: '/about',
        exact: false,
        component: About,
      },
      {
        path: '/topics',
        component: Topics,
        routes: [
          {
            path: '/topics/:topicId',
            component: Topic,
          }
        ]
      }
    ]
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
