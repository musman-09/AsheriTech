import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const useForgotPasswordViewModal = () => {
  const naviagtion = useNavigation();
  const goBack = () => {
    naviagtion.navigate('Login');
  };
  const handleSendCode = () => {
    naviagtion.navigate('SignupJourney', { type: 'ForgotPass' });
  };
  return {
    states: {},
    functions: {
      handleSendCode,
      goBack,
    },
  };
};

export default useForgotPasswordViewModal;
