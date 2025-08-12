import { View, Text } from 'react-native';
import React from 'react';
import TopHeader from '../../components/TopHeader';
import useForgotPasswordViewModal from '../../UseViewModels/useForgotPasswordViewModal';
import ForgotPasswordView from '../../views/ForgotPasswordView';

const ForgotPassword = () => {
  const { states, functions } = useForgotPasswordViewModal();

  const { handleSendCode, goBack } = functions;
  return <ForgotPasswordView goBack={goBack} handleSendCode={handleSendCode} />;
};

export default ForgotPassword;
