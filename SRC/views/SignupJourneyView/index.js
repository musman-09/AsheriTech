import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './style';
import TopHeader from '../../components/TopHeader';
import CreateAccount from './components/CreateAccount';
import Verification from './components/Verification';
import CreatePassword from './components/CreatePassword';
import CustomButton from '../../components/Button';
import ResultModal from '../../components/resultModal';

const SignupJourneyView = ({
  journeyProceedButton,
  step,
  goBack,
  showModal,
  onCloseModal,
}) => {
  console.log('hit screen last');
  const returnComponent = {
    1: <CreateAccount />,
    2: <Verification />,
    3: <CreatePassword />,
  };

  const returnTitle = {
    1: 'Create Account',
    2: 'Verification',
    3: 'Create Password',
  };

  const returnButton = {
    1: 'Signup',
    2: 'Verify',
    3: 'Continue',
  };

  return (
    <View style={styles.container}>
      <TopHeader title={returnTitle[step]} goBack={goBack} />

      {returnComponent[step]}

      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={journeyProceedButton}
      >
        <CustomButton title={returnButton[step]} />
      </TouchableOpacity>

      <ResultModal visible={showModal} onClose={onCloseModal} />
    </View>
  );
};

export default SignupJourneyView;
