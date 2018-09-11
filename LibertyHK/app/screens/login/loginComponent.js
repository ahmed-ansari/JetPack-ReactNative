import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { strings } from '../../locales/Lang';
import { styles } from './styles';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    //Sample API call with hardcoded username and password
    //After Successful Login props will get updated
    //the below method will be called on submit action in login page
    props.login({ username: 'test', password: 'XXXX' });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>{strings('login.welcomText')}</Text>
      </View>
    );
  }
}

export default LoginComponent;
