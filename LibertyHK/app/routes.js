import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Linking } from 'react-native';
// import { connect } from 'react-redux';
import { Router, Scene, Actions, Stack } from 'react-native-router-flux';
import LoginComponent from './screens/login';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }

  shouldComponentUpdate(/* nextProps,nextState */) { }

  componentDidUpdate(/* prevProps */) { }

  componentWillUnmount() { }

  componentDidCatch(/* error,errorInfo */) { }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="launch" component={LoginComponent} initial />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
