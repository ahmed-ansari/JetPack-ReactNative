import { StyleSheet } from 'react-native';
// import { scale, verticalScale, moderateScale } from '../../utils/resolution';

export const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    margin: 20,
  },
  buttonStyle: {
    height: 60,
    width: '100%',
    borderRadius: 1,
    fontSize: 16,
  },
  customButton: {
    width: '100%',
  },
  labelStyle: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    margin: 20,
    fontSize: 20,
  },
  inputView: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  inputStyle: {
    width: '100%',
    margin: 10,
    // borderColor:'gray',
    height: 50,
    // borderWidth:1,
    // borderRadius:8
  },
  persistentText: {},
});
