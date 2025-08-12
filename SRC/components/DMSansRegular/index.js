import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import { fonts } from '../../assets/fonts';
import { COLORS } from '../../assets/themes/Colors';
import { vh, vw } from '../../assets/themes/dimension';

const DMSansRegular = ({ name, numberOfLines, style, ...rest }) => {
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

export default DMSansRegular;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: fonts.DMSansRegular,
    textAlign: 'center',
    color: COLORS.textColor,
    fontSize: vw * 1.3,
  },
});
