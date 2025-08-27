import { View, Text } from 'react-native';
import React from 'react';
import { icons } from '../assets';

const useHomeViewModels = () => {
  const tabsData = [
    {
      name: 'React Js',
    },
    {
      name: 'Vue Js',
    },
    {
      name: 'Altitude',
    },
    {
      name: 'Sap Ariba',
    },
    {
      name: 'Sap S/4HANA',
    },
    {
      name: 'Salesforce',
    },
  ];

  const courseData = [
    {
      Image: icons.ml,
      name: 'Microsoft Azure Machinne Learning',
    },
    {
      Image: icons.bot,
      name: 'Built Operate Transfer (BOT)',
    },
    {
      Image: icons.bot,
      name: 'Built Operate Transfer (BOT)',
    },
    {
      Image: icons.bot,
      name: 'Built Operate Transfer (BOT)',
    },
  ];

  return {
    states: {
      tabsData,
      courseData,
    },
    functions: {},
  };
};

export default useHomeViewModels;
