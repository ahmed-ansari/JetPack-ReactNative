import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { strings } from '../../locales/Lang';
import { styles } from './styles';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
