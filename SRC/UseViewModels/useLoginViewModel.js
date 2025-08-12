import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import useErrorHandlingHook from '../Hook/useErrorHandlingHook';

const useLoginViewModel = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({});

  const {
    setterForApiData: loginSetterForApiData,
    apiData: loginApiData,
    checkForError: LoginCheckForError,
  } = useErrorHandlingHook({
    userName: credentials?.userName,
    password: credentials?.password,
  });

  const handleLogin = () => {
    // navigation.navigate('');
  };

  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  const onPressForgotPass = () => {
    navigation.navigate('ForgotPassword');
  };
  return {
    states: {},
    functions: {
      handleLogin,
      onPressSignup,
      onPressForgotPass,
    },
  };
};

export default useLoginViewModel;
