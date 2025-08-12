import { StyleSheet } from 'react-native';
import { vh, vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',

    // alignItems: 'center',
    // borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    // gap: vh * 3,
  },
  signupContainer: {
    // justifyContent: 'center',

    alignItems: 'center',
    // borderWidth: 2,
    backgroundColor: 'white',
    flex: 1,
    // marginTop: vh,
    gap: vh * 3,
  },
  signupImage: {
    width: vw * 50,
    height: vw * 60,
    resizeMode: 'contain',
    // borderWidth: 2,
    marginTop: vh * 6,
  },
  headingText: {
    fontSize: vw * 5,
    color: COLORS.textColor,
  },
  headingTextBig: {
    fontSize: vw * 7,
    color: COLORS.textColor,
  },
  buttonContainer: {
    gap: vh * 0.7,
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
});
