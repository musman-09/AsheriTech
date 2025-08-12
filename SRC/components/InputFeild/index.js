import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { vh, vw } from '../../assets/themes/dimension';
import MaskInput from 'react-native-mask-input';
import { COLORS } from '../../assets/themes/Colors';
import { icons } from '../../assets';
import DMSansBold from '../DMSansBold';

const InputFeild = ({
  inputStyle,
  placeholder,
  textSecurity,
  inputContainer,
  closeEyeIcon,
  mask,
  onChangeText,
  value,
  onError,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const InputComponent = mask ? MaskInput : TextInput;
  return (
    <>
      <View style={[styles.container, inputContainer]}>
        <InputComponent
          secureTextEntry={showPassword ? false : textSecurity}
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textGrayShade}
          onChangeText={onChangeText}
          value={value}
        />

        {closeEyeIcon && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              style={styles.icon}
              source={showPassword ? icons.eyeOpen : closeEyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      <DMSansBold style={styles.onError} name={onError} />
    </>
  );
};

export default InputFeild;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: vw * 0.5,
    // backgroundColor: COLORS.grey,
  },
  input: {
    // borderWidth: 1,
    paddingHorizontal: vw * 5,
    paddingVertical: vh * 2.2,
    borderColor: '#ccc',
    // height: vh * 3,
    borderRadius: 8,
    // fontSize: 16,
    width: '85%',
  },
  icon: {
    width: vw * 8,
    height: vw * 10,
  },
  onError: {
    // borderWidth: 2,
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
    color: COLORS.cardBackgroundRed,
    alignSelf: 'flex-start',
  },
});
