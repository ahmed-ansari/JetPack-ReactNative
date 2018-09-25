/*
  GMButton component is a reusable button component
  the props that are passed
  buttonStyle= this can be used to style the button,
  textStyle: this can be used to style the button text,
  loaderStyle: this can be used to style the loader,
  text: button name,
  loaderState: it can be used to manage loader state,
  loaderColor: this can be used to manange loader color,
  accessibilityLabel: name of accessibility label,
  disabled: disable button and manage opacity,
  height: it can be used to set height of button,
  paddingHorizontal: it can be used for setting up horizantal padding,
  paddingVertical: it can be used for setting up vertical padding,
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  defaultButton: {
    // alignSelf: 'stretch',
    backgroundColor: '#06748C',
    borderRadius: 8,
    height: 48,
    // paddingVertical: '5%',
    // paddingHorizontal: '5%',
    // borderWidth:1,
    // borderColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  container: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth:1,
    // borderColor:'yellow'
  },
});

const GButton = ({ buttonStyle, textStyle, text, onPress }) => (
  <TouchableOpacity
    style={[styles.defaultButton, buttonStyle]}
    onPress={() => {
      onPress();
    }}
  >
    <View style={styles.container}>
      <Text style={[styles.defaultText, textStyle]}>{text.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);

GButton.propTypes = {
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.any,
};

GButton.defaultProps = {
  buttonStyle: {},
  textStyle: {},
  onPress: PropTypes.any,
};

export default GButton;
