/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { tabIcons } from '../../assets';
import HomeStack from '../HomeStack';
import { COLORS } from '../../assets/theme/colors';
import { vh, vw } from '../../assets/theme/dimension';
import PriorApproval from '../../screens/PriorApproval';
import Helpline from '../../screens/Helpline';
import LinearGradient from 'react-native-linear-gradient';
import LodgeClaimStack from '../LodgeClaimStack';
import { useSelector } from 'react-redux';
import Home from '../../screens/Home';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
export default Tabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: vh * 1.5,
    backgroundColor: COLORS.white,
    borderRadius: vh * 50,
    height: vw * 20,

    marginHorizontal: vw * 6,
    // paddingHorizontal: vw * 1.2,
    elevation: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    // borderColor: COLORS.white,
  },
  iconContainer: {
    padding: vh * 1,
    borderRadius: vh * 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  gradientBorder: {
    borderRadius: vh * 50,
    // borderWidth: 2,
    // alignItems: 'center',
    marginTop: vh,
    marginBottom: vh * 0.5,
  },
  wrapper: {
    paddingHorizontal: vw * 2.2,
    paddingVertical: vw * 2.2,
    borderRadius: (vw * 25) / 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  iconStyle: {
    height: vw * 6.2,
    width: vw * 6.2,
    resizeMode: 'contain',
  },
  iconStyleprior: {
    height: vw * 6.8,
    width: vw * 7,
    resizeMode: 'contain',
  },
  iconStyleLarge: {
    height: vw * 8,
    width: vw * 8,
    resizeMode: 'contain',
  },
});
