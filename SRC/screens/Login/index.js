import { View, Text } from 'react-native';
import React from 'react';
import LoginView from '../../views/LoginView';
import useLoginViewModel from '../../UseViewModels/useLoginViewModel';

const Login = () => {
  const { states, functions } = useLoginViewModel();
  const { onPressSignup, onPressForgotPass } = functions;
  return (
    <LoginView
      onPressSignup={onPressSignup}
      onPressForgotPass={onPressForgotPass}
    />
  );
};

export default Login;
