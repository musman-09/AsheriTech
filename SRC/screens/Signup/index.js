import { View, Text } from 'react-native';
import React from 'react';
import SignupView from '../../views/SignupView';
import useSignupViewModel from '../../UseViewModels/useSignupViewModel';

const Signup = () => {
  const { functions } = useSignupViewModel();
  const { onPressSignupOptions, goBack } = functions;
  return (
    <SignupView onPressSignupOptions={onPressSignupOptions} goBack={goBack} />
  );
};

export default Signup;
