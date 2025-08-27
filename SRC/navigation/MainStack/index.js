import { useSelector } from 'react-redux';
import Home from '../../screens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from '../AuthStack';

const MainStack = () => {
  const Stack = createStackNavigator();
  const token = useSelector(state => state.counter.token);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!token ? (
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      ) : (
        <Stack.Screen name={'DrawerStack'} component={Home} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
