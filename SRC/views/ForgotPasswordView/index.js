import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import TopHeader from '../../components/TopHeader';
import { styles } from './style';
import DMSansBold from '../../components/DMSansBold';
import CustomButton from '../../components/Button';
import InputFeild from '../../components/InputFeild';

const ForgotPasswordView = ({ handleSendCode, goBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TopHeader title="Forgot Password" goBack={goBack} />
        <View style={styles.heading}>
          <DMSansBold
            style={styles.textStyle}
            name={
              'Enter the verification code we just sent on your email address.'
            }
          />
        </View>
        <View>
          <InputFeild placeholder={'Enter Email'} />
        </View>
        <TouchableOpacity onPress={handleSendCode}>
          <CustomButton title={'Send Code'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordView;
