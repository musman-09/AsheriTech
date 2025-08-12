import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import SignupJourney from '../../screens/SignupJourney';
import ForgotPassword from '../../screens/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="SignupJourney" component={SignupJourney} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthStack;
