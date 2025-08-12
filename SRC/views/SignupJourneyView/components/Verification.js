import { View, StyleSheet } from 'react-native';
import React from 'react';
import DMSansBold from '../../../components/DMSansBold';
import { OtpInput } from 'react-native-otp-entry';
import { vh, vw } from '../../../assets/themes/dimension';

const Verification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.heading}>
          <DMSansBold
            style={styles.textStyle}
            name={
              'Enter the verification code we just sent on your email address.'
            }
          />
        </View>

        <View style={styles.otp}>
          <OtpInput
            numberOfDigits={4}
            autoFocus={false}
            type="numeric"
            onTextChange={text => console.log(text)}
            onFilled={text => console.log(`OTP is ${text}`)}
            theme={{
              containerStyle: styles.OtpContainer,
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: styles.pinCodeText,
              focusStickStyle: styles.focusStick,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally23
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
