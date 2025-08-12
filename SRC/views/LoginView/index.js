import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DMSansBold from '../../components/DMSansBold';
import { icons, images } from '../../assets';
import { styles } from './style';
import InputFeild from '../../components/InputFeild';
import CustomButton from '../../components/Button';
import { COLORS } from '../../assets/themes/Colors';
import { vh, vw } from '../../assets/themes/dimension';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const LoginView = ({ onPressSignup, onPressForgotPass }) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginImageContainer}>
        <Image style={styles.loginImage} source={images.loginDoor} />

        <DMSansBold style={styles.loginHeading} name={'Login'} />
      </View>

      <View style={styles.inputContainer}>
        <InputFeild
          placeholder={'Enter Your Email'}
          inputStyle={styles.inputStyle}
        />

        <InputFeild
          placeholder={'Enter Password'}
          inputStyle={styles.inputStyle}
          textSecurity={true}
          closeEyeIcon={icons.eyeClosed}
        />
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={onPressForgotPass}>
          <DMSansBold
            style={{ color: COLORS.textBlackShade }}
            name={'Forgot Password?'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity>
          <CustomButton
            title={'Login'}
            buttonContainer={{ backgroundColor: COLORS.buttonBackground }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.loginWith}>
        <View style={styles.line} />

        <TouchableOpacity>
          <DMSansBold
            style={{ color: COLORS.textColor }}
            name={'Or Login With'}
          />
        </TouchableOpacity>

        <View style={styles.line} />
      </View>

      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={icons.facebook} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={icons.google} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Image source={icons.apple} style={styles.iconStyle} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.signupText}>
        <DMSansBold
          style={{ textDecorationLine: 'underline' }}
          name={"Don't have an account?"}
        />
        <TouchableOpacity onPress={onPressSignup}>
          <DMSansBold
            name={' Signup'}
            style={{
              color: COLORS.buttonBackground,
              textDecorationLine: 'underline',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginView;
