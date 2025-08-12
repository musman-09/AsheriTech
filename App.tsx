import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import LoginView from './SRC/views/LoginView';
import Login from './SRC/screens/Login';
import Signup from './SRC/screens/Signup';
import SignupJourney from './SRC/screens/SignupJourney';
import TopHeader from './SRC/components/TopHeader';
import { NavigationContainer } from '@react-navigation/native';
import CreateAccount from './SRC/views/SignupJourneyView/components/CreateAccount';
import Verification from './SRC/views/SignupJourneyView/components/Verification';
import CreatePassword from './SRC/views/SignupJourneyView/components/CreatePassword';
import ResultModal from './SRC/components/resultModal';
import AuthStack from './SRC/navigation/AuthStack';

function App() {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <SignupJourney /> */}
      {/* <TopHeader /> */}
      {/* <CreateAccount /> */}
      {/* <Verification /> */}
      {/* <CreatePassword /> */}
      {/* <ResultModal /> */}
      <AuthStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
