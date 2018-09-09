import React, { Component } from 'react'
import {
    View,
    Text
  } from 'react-native';
import Styles from './styles'


class LoginComponent extends Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <View style={Styles.viewStyle}>
              <View style={{alignItems:'center',justifyContent:'center'}} >
                <Text>Welcome to Liberty</Text>
                </View>
            </View>
        );
    }
}


export default LoginComponent;
