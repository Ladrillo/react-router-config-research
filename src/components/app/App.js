import React, { Component } from 'react';
import styled from 'styled-components';
import * as c from '../../constants';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators, dispatch } from 'redux';


export class App extends Component {
  render() {
    return (
      <div onClick={this.props.hello}>
        hello
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(state => state, mapDispatchToProps)(App);
