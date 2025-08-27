import { View, Text } from 'react-native';
import React from 'react';
import HomeView from '../../views/HomeView';
import useHomeViewModels from '../../UseViewModels/useHomeViewModels';

const Home = () => {
  const { functions, states } = useHomeViewModels();
  const { tabsData, courseData } = states;
  return <HomeView tabsData={tabsData} courseData={courseData} />;
};

export default Home;
