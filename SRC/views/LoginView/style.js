import { StyleSheet } from 'react-native';
import { vh, vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';

export const styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: vw * 6,
    backgroundColor: 'white',
    gap: vh * 1.4,
    flex: 1,
  },

  loginImageContainer: {
    // borderWidth: 2,
    // width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: vh * 15,
    gap: vh,
  },
  loginImage: {
    width: 40 * vw,
    height: 20 * vh,
    resizeMode: 'contain',
    // borderWidth: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  loginHeading: {
    color: COLORS.buttonText,
    // borderWidth: 2,
    fontSize: vw * 10,
  },
  inputContainer: {
    // marginTop: vh * 1.5,
    // borderWidth: 2,
    gap: vh * 2,
  },
  inputStyle: {
    // backgroundColor: COLORS.grey,
    fontSize: vw * 4,
    paddingVertical: vh * 2,
  },
  forgotPassword: {
    // borderWidth: 2,
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // marginTop: vh,
  },
  buttonsContainer: {
    marginTop: vh * 2,
    gap: vh,
  },
  loginWith: {
    flexDirection: 'row',
    gap: vw * 2,
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: vh,
  },
  line: {
    // flex: 1,
    width: vw * 30,
    height: vh * 0.1,
    backgroundColor: COLORS.buttonText,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: vw * 3,
    // borderWidth: 2,
    // marginTop: vh * 2,
    justifyContent: 'center',
  },
  iconContainer: {
    borderWidth: vw * 0.3,
    borderColor: COLORS.borderColor,
    paddingHorizontal: vw * 10,
    paddingVertical: vh * 0.3,
    borderRadius: vw * 1.3,
  },
  iconStyle: {
    width: vw * 6,
    height: vw * 12,
    resizeMode: 'contain',
  },
  signupText: {
    flexDirection: 'row',
    // borderWidth: 2,
    justifyContent: 'center',
    // marginTop: vh,
    // borderBottomColor: 'red',
    // borderWidth: 2,
    // borderBottomWidth: 1,
  },
});
