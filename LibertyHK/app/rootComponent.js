import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Routes from './routes';

class AppRootComponent extends Component {

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  componentDidCatch(error, errorInfo) {}

  render() {
    return <Routes />;
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(AppRootComponent);
