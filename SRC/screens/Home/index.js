import { View, Text } from 'react-native';
import React from 'react';
import HomeView from '../../views/HomeView';
import useHomeViewModels from '../../UseViewModels/useHomeViewModels';

const Home = () => {
  const {} = useHomeViewModels();
  return <HomeView />;
};

export default Home;
