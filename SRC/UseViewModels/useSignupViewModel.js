import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const useSignupViewModel = () => {
  const navigation = useNavigation();
  const onPressSignupOptions = () => {
    navigation.navigate('SignupJourney');
  };

  const goBack = () => {
    navigation.navigate('Login');
  };

  return {
    functions: { onPressSignupOptions, goBack },
    states: {},
  };
};

export default useSignupViewModel;
