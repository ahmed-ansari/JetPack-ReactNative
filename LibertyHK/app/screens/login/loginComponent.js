import React, { Component } from 'react'
import {
    View,
    Text
  } from 'react-native';
import { styles }from './styles'


class LoginComponent extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
          <View style={styles.viewStyle}>
            <Text>Welcome to Liberty</Text>
          </View>
        );
    }
}


export default LoginComponent;
