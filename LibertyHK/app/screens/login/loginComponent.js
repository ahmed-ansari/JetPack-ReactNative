import React, { Component } from 'react';
import PropTypes from 'prop-types'
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

/*
All the props parameters should be declared here
*/
LoginComponent.propTypes = {
  handleEmail: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  handlePassword: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  email: PropTypes.string,
  accountLocked: PropTypes.bool,
};
/*
Default values for props paramers should be defined here.
*/
LoginComponent.defaultProps = {
  email:'',
  accountLocked:false
};

export default LoginComponent;
