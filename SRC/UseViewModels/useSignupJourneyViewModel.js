import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Login from '../screens/Login';

const useSignupJourneyViewModel = () => {
  const naviagtion = useNavigation();
  const route = useRoute();
  const { type } = route?.params || {};

  console.log(type, 'type passed');

  const [step, setStep] = useState(type === 'ForgotPass' ? 2 : 1);
  const [showModal, setShowModal] = useState(false);
  console.log(step, 'step');

  const journeyProceedButton = () => {
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      setStep(3);
      return;
    }

    if (step === 3) {
      console.log('type 3');
      setShowModal(true);
    }
  };

  const goBack = () => {
    if (step === 1) {
      naviagtion.navigate('Signup');
    }

    if (step === 2 && type === 'ForgotPass') {
      naviagtion.navigate('ForgotPassword');
      return;
    }
    if (step === 2) {
      setStep(step - 1);
      return;
    }

    if (step === 3) {
      setStep(step - 1);
      return;
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
    naviagtion.navigate('Login');
  };

  return {
    states: {
      step,
      showModal,
    },
    functions: {
      journeyProceedButton,
      goBack,
      onCloseModal,
    },
  };
};

export default useSignupJourneyViewModel;
