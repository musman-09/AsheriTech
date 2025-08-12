import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons, images } from '../../assets';
import { styles } from './style';
import DMSansBold from '../../components/DMSansBold';
import CustomButton from '../../components/Button';
import { COLORS } from '../../assets/themes/Colors';
import { vw } from '../../assets/themes/dimension';
import TopHeader from '../../components/TopHeader';

const SignupView = ({ onPressSignupOptions, goBack }) => {
  return (
    <View style={styles.container}>
      <TopHeader title={'Create Account'} goBack={goBack} />

      <View style={styles.signupContainer}>
        <Image source={images.signupImage} style={styles.signupImage} />

        <View>
          <DMSansBold
            style={styles.headingText}
            name={'Start Your Journey To A'}
          />
          <DMSansBold
            style={styles.headingTextBig}
            name={'Seamless Tech Education'}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPressSignupOptions}>
            <CustomButton
              buttonContainer={{ width: '100%' }}
              title="Signup as a Student"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <CustomButton
              buttonContainer={{
                backgroundColor: 'white',
                borderColor: COLORS.buttonBackground,
                borderWidth: vw * 0.4,
                width: '100%',
              }}
              title="Signup as a Organization"
              buttonText={{ color: COLORS.buttonText }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <CustomButton
              buttonContainer={{
                backgroundColor: 'white',
                borderColor: COLORS.buttonBackground,
                borderWidth: vw * 0.4,
                width: '100%',
              }}
              title="Signup as a Instructor"
              buttonText={{ color: COLORS.buttonText }}
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
      </View>
    </View>
  );
};

export default SignupView;
