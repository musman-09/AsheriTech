import { View, Text } from 'react-native';
import React from 'react';
import LoginView from '../../views/LoginView';
import useLoginViewModel from '../../UseViewModels/useLoginViewModel';

const Login = () => {
  const { states, functions } = useLoginViewModel();
  const {
    onPressSignup,
    onPressForgotPass,
    loginSetterForApiData,
    LoginCheckForError,
    handleLogin,
  } = functions;

  const { loginApiData } = states;
  return (
    <LoginView
      onPressSignup={onPressSignup}
      onPressForgotPass={onPressForgotPass}
      loginSetterForApiData={loginSetterForApiData}
      LoginCheckForError={LoginCheckForError}
      loginApiData={loginApiData}
      handleLogin={handleLogin}
    />
  );
};

export default Login;
