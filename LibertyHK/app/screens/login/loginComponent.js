import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { strings } from '../../locales/Lang';
import { styles } from './styles';
import { checkBiometricAvailability, activateTouchID } from '../../commonComponents/BiometricHandler'
class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Sample API call with hardcoded username and password
    //After Successful Login props will get updated
    //the below method will be called on submit action in login page
    props.login({ username: 'test', password: 'XXXX' });
  }
  onPressFingerScan = () => {
    //Method to check the biometric sensor availability
    checkBiometricAvailability(response => {
      //Response will be returned either true or false
      //True will be the successfull validation of the biometric sensor
      //False is to denote that the device dont have sensor or sensors available, but it is not configured
      if (response == true) {
        //
        activateTouchID(success => {
          Alert.alert("Success")
          //Action to be taken care when the process is success
        }, failure => {
          Alert.alert("failed")
          //Action to be taken care when the process is failure
        })
      } else {
        //Do something for the device doesn't have finger print
        //Do Something for the device doesn't configure finger print
      }
    })
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>{strings('login.welcomText')}</Text>
        <TouchableOpacity onPress={this.onPressFingerScan}><Text>{strings('login.welcomText')}</Text></TouchableOpacity>
      </View>
    );
  }
}

export default LoginComponent;
