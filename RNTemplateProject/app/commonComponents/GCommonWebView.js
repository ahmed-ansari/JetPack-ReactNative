import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

/*
  Commone component to rende web view with the targer url
  passed as props
 */

export const GCommonWebView = props => (
  <WebView
    source={{ uri: props.weburi }}
    onNavigationStateChange={props.webResponse}
    onError={props.onError}
  />
);

GCommonWebView.propTypes = {
  weburi: PropTypes.any.isRequired,
  onError: PropTypes.func.isRequired,
  webResponse: PropTypes.func.isRequired,
};

GCommonWebView.defaultProps = {};
