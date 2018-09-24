import React, { Component } from 'react';
import { View, Text, Button, TextInput, Alert, Platform } from 'react-native';
import PropTypes from 'prop-types'
import { Actions } from 'react-native-router-flux';
import { strings, setLocale } from '../../locales/Lang';
import { styles } from './styles';
import { GButton } from '../../commonComponents'

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        welcomText:strings('login.welcomText'),
        inputData:'',
        outputData:'',
        isBiometric:false
    };
    this.changeLanguare=this.changeLanguare.bind(this)
    this.storeSecureData = this.storeSecureData.bind(this)
    this.retrieveSecureData = this.retrieveSecureData.bind(this)
    this.storeSuccessCallback = this.storeSuccessCallback.bind(this)
    this.storeErrorCallback = this.storeErrorCallback.bind(this)
    this.retrieveSuccessCallback = this.retrieveSuccessCallback.bind(this)
    this.retrieveErrorCallback = this.retrieveErrorCallback.bind(this)
    this.checkBiometrics = this.checkBiometrics.bind(this)
    this.bioMetricCallback = this.bioMetricCallback.bind(this)
    this.enableBioMetric = this.enableBioMetric.bind(this)
    this.enableBioMetricSuccessCallback=this.enableBioMetricSuccessCallback.bind(this)
    this.enableBioMetricErrorCallback = this.enableBioMetricErrorCallback.bind(this)
  }

  // componentDidMount() {
    // // alert('componentDidMount')
    // this.props.isBiometricAvailable((res)=>{
    //   alert(res)
    //   if(Platform.OS === 'ios')
    //     this.setState({isBiometricAvailable:((res ==='FaceID' || res ==='TouchID') ? true : false)})
    //   else if(Platform.android === 'android')
    //     this.setState({isBiometricAvailable:(res === true ? true : false)})
    // })
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, nextProps)
  //   if (nextProps !== this.props) {
  //     return true;
  //   }
  //   return false;
  // }

  // componentDidUpdate(/* prevProps */) { }

  // componentWillUnmount() { }

  // componentDidCatch(/* error,errorInfo */) { }
  bioMetricCallback = (res)=>{

    if(Platform.OS === 'ios'){
      alert('IOS : '+res)
      this.setState({isBiometric:res})
    }
    else if(Platform.android === 'android'){
      alert('Android :'+res)
      this.setState({isBiometric:res})
  }
}

enableBioMetricSuccessCallback=()=>{
  alert('Enable success callback')
}

enableBioMetricErrorCallback=()=>{
  alert('Enable error callback')
}

  storeSuccessCallback = (res)=>{
    alert(res)
  }

  storeErrorCallback=(error)=>{
    alert(error)
  }

  enableBioMetric(){
    this.props.enableBioMetricID(this.enableBioMetricSuccessCallback,this.enableBioMetricErrorCallback)
  }

  checkBiometrics(){
    this.props.isBiometricAvailable(this.bioMetricCallback)
  }

  storeSecureData(value,storeSuccessCallback,storeErrorCallback){
    this.props.storeSecureData('secureData', value, storeSuccessCallback, storeErrorCallback)
  }

  retrieveSuccessCallback(res){
    alert(res)
    this.setState({outputData:res})
  }

  retrieveErrorCallback(error){
    alert(error)
  }

  retrieveSecureData(key,retrieveSuccessCallback,retrieveErrorCallback){
    this.props.retrieveSecureData(key, retrieveSuccessCallback, retrieveErrorCallback)
  }

  showHamburgerMenu(){
    Actions.drawerOpen()
  }

  changeLanguare(){
    setLocale('zh')
    this.setState({welcomText:strings('login.welcomText')})
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text>{this.state.welcomText}</Text>
        <Button
          title='Click Me to change Language'
          onPress={this.changeLanguare}
          style={styles.buttonStyle}
        />
        <Button
          title='Show Hamburger Menu'
          onPress={this.showHamburgerMenu}
          style={styles.buttonStyle}
        />
        <View style={styles.labelStyle}>
          <Text>Pesistent Store (Kestore / Keychain)</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            placeholder='Enter data to be stored'
            value={this.state.inputData}
            onChangeText={(text)=>{this.setState({inputData:text})}}
          />
        </View>
        <View>
          <GButton
            buttonStyle={styles.customButton}
            text='Store to Keystore/Keychain'
            onPress={()=>this.storeSecureData(this.state.inputData,this.storeSuccessCallback,this.storeErrorCallback)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputStyle}
            value={this.state.outputData}
          />
        </View>
        <View>
          <GButton
            buttonStyle={styles.customButton}
            text='Retrieve from Keystore/Keychain'
            onPress={()=>this.retrieveSecureData('secureData',this.retrieveSuccessCallback,this.retrieveErrorCallback)}
          />
        </View>
        <View>
          <View style={styles.labelStyle}>
            <Text>Biometric authentication (TouchID / FaceID)</Text>
          </View>
        </View>
        <View>
          <GButton
            buttonStyle={styles.customButton}
            text='Check TouchID/FaceID'
            onPress={()=>{this.checkBiometrics()}}
          />
        </View>
        {this.state.isBiometric && (
          <View>
            <GButton
              buttonStyle={[styles.customButton,{marginTop:20}]}
              text='Enable TouchID/FaceID'
              onPress={()=>{this.enableBioMetric()}}
            />
          </View>
        )
        }
      </View>
    );
  }
}

/*
All the props parameters should be declared here
*/
LoginComponent.propTypes = {
  storeSecureData: PropTypes.func.isRequired,
  retrieveSecureData: PropTypes.func.isRequired,
  isBiometricAvailable: PropTypes.func.isRequired,
  enableBioMetricID: PropTypes.func.isRequired,
};
/*
Default values for props paramers should be defined here.
*/
LoginComponent.defaultProps = {
  // email:'',
  // accountLocked:false
};

export default LoginComponent;
