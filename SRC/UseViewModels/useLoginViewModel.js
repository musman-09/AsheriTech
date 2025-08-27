import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useErrorHandlingHook from '../Hook/useErrorHandlingHook';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../redux/authSlice';

const useLoginViewModel = () => {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({});

  const {
    setterForApiData: loginSetterForApiData,
    apiData: loginApiData,
    checkForError: LoginCheckForError,
  } = useErrorHandlingHook({
    userEmail: '',
    password: '',
  });

  const dispatch = useDispatch();
  const token = useSelector(state => state.counter.token);
  console.log(token, 'tokennnnn');
  const handleLogin = () => {
    console.log('iii');
    dispatch(setToken('usman'));
  };

  const onPressSignup = () => {
    navigation.navigate('Signup');
  };

  const onPressForgotPass = () => {
    navigation.navigate('ForgotPassword');
  };
  return {
    states: {
      loginApiData,
    },
    functions: {
      handleLogin,
      onPressSignup,
      onPressForgotPass,
      loginSetterForApiData,
      LoginCheckForError,
    },
  };
};

export default useLoginViewModel;
