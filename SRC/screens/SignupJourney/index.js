import { View, Text } from 'react-native';
import React from 'react';
import SignupView from '../../views/SignupView';
import SignupJourneyView from '../../views/SignupJourneyView';
import useSignupJourneyViewModel from '../../UseViewModels/useSignupJourneyViewModel';

const SignupJourney = () => {
  const { functions, states } = useSignupJourneyViewModel();

  const { journeyProceedButton, goBack, onCloseModal } = functions;
  const { step, showModal } = states;
  return (
    <SignupJourneyView
      step={step}
      goBack={goBack}
      journeyProceedButton={journeyProceedButton}
      showModal={showModal}
      onCloseModal={onCloseModal}
    />
  );
};

export default SignupJourney;
