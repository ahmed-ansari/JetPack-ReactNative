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
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import AppConstant from '../appConstants';
// import GMAnalytics from '../../analytics/gm-analytics';

const styles = StyleSheet.create({
  defaultButton: {
    alignSelf: 'stretch',
    backgroundColor: AppConstant.colors.primary,
    borderRadius: 8,
    height: 48,
    paddingVertical: AppConstant.spacing.largeSmall,
    paddingHorizontal: AppConstant.spacing.large,
  },
  defaultText: {
    fontSize: AppConstant.fontSize.small,
    color: AppConstant.colors.primaryContrast,
    textAlign: 'center',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultLoader: {
    paddingRight: AppConstant.spacing.medium,
  },
});
const getButtonStyle = (disabled, setDisablePrimaryColor = false) => ({
  ...(disabled
    ? { backgroundColor: setDisablePrimaryColor || AppConstant.colors.primary }
    : {}),
});

export const GMButton = ({
  buttonStyle,
  textStyle,
  loaderStyle,
  text,
  loaderColor,
  loaderState,
  accessibilityLabel,
  disabled,
  setDisablePrimaryColor,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    disabled={disabled}
    style={[
      styles.defaultButton,
      buttonStyle,
      getButtonStyle(disabled, setDisablePrimaryColor),
    ]}
    accessible
    accessibilityLabel={`${accessibilityLabel}Container`}
    onPress={() => {
      props.onPress();

      // new GMAnalytics().trackButtonClick(accessibilityLabel);
    }}
  >
    <View
      accessible
      style={styles.container}
      accessibilityLabel={accessibilityLabel}
    >
      {loaderState && (
        <ActivityIndicator
          color={loaderColor}
          style={[styles.defaultLoader, loaderStyle]}
        />
      )}
      <Text style={[styles.defaultText, textStyle]}>{text.toUpperCase()}</Text>
    </View>
  </TouchableOpacity>
);

GMButton.propTypes = {
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
  loaderStyle: PropTypes.any,
  text: PropTypes.string.isRequired,
  loaderState: PropTypes.bool,
  loaderColor: PropTypes.string,
  accessibilityLabel: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.any,
  setDisablePrimaryColor: PropTypes.any,
};

GMButton.defaultProps = {
  buttonStyle: {},
  textStyle: {},
  loaderStyle: {},
  loaderState: false,
  loaderColor: AppConstant.colors.primaryContrast,
  disabled: false,
  onPress: PropTypes.any,
  setDisablePrimaryColor: false,
};
