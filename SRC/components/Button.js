import React from 'react';
import { StyleSheet, View } from 'react-native';
import DMSansRegular from './DMSansRegular';
import { vh, vw } from '../assets/themes/dimension';
import { COLORS } from '../assets/themes/Colors';
import DMSansBold from './DMSansBold';

const CustomButton = ({ title, buttonContainer, buttonText }) => {
  return (
    <View style={[styles.container, buttonContainer]}>
      <DMSansBold style={[styles.buttonText, buttonText]} name={title} />
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    borderRadius: vw * 1.5,
    paddingHorizontal: vw * 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.buttonBackground,
    width: '70%',
  },
  buttonText: {
    fontSize: vw * 5,
    paddingVertical: vh * 1.5,
    color: 'white',
  },
});
