/* **************************\
Component: GBadgeWithText
Explanation:
This component is used for creating the Badge.
the props that are passed
number = Number displayed on the badge,
color = background color of the badge
============================
Creator: Manick || Date: 2018-09-26
\*************************** */

import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';

/* Custom Imports */

import { AppConstant } from '../appConstants';

const styles = StyleSheet.create({
  badge: {
    marginHorizontal: 5,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    height: 22,
    alignSelf: 'center',
  },
  badgeText: {
    color: AppConstant.colors.white,
    fontWeight: 'bold',
    fontSize: AppConstant.fontSize.claimLabel,
  },
});

/*
This method will help to get the background color
*/
const getColor = color => ({
  backgroundColor: color || AppConstant.colors.pink,
});

/*
This method will load the badge component
*/
const GBadgeWithText = ({ number, color, ...props }) => (
  <View style={[styles.badge, getColor(color)]}>
    <Text style={styles.badgeText}>{number}</Text>
  </View>
);
/*
All the props parameters should be declared here
*/
GBadgeWithText.propTypes = {
  number: PropTypes.number.isRequired,
  color: PropTypes.any,
};
/*
Default values for props paramers should be defined here.
*/
GBadgeWithText.defaultProps = {
  color: AppConstant.colors.pink,
};

export default GBadgeWithText;
