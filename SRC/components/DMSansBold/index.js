import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { fonts } from '../../assets/fonts';
import { vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';

const DMSansBold = ({ name, numberOfLines, style, ...rest }) => {
  return (
    <Text
      {...rest}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[styles.textStyle, style]}
    >
      {name}
    </Text>
  );
};

export default DMSansBold;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.DMSans.bold,
    textAlign: 'center',
    fontSize: 3.5 * vw,
    color: COLORS.black,
  },
});
