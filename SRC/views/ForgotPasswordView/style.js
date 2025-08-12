import { View, StyleSheet } from 'react-native';
import { vh, vw } from '../../assets/themes/dimension';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    // alignItems: 'center',
  },
  subContainer: {
    width: '100%',
    paddingHorizontal: vw * 5,
    gap: vh * 4,
  },
  heading: {
    marginTop: vh * 2,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: vw * 5,
    textAlign: 'left',
    // color: 'black',
  },
  otp: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderWidth: 2,
  },
  OtpContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    gap: vw * 4,
    // borderWidth: 2,
  },
  pinCodeContainer: {
    width: vw * 14,
    height: vh * 7,
    borderWidth: 2,
    // borderColor: '#000',
    borderRadius: vw * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCodeText: {
    fontSize: vw * 5,
    textAlign: 'center',
  },
  focusStick: {
    width: 2,
    height: vh * 3,
    backgroundColor: '#000',
    alignSelf: 'center',
  },
});
