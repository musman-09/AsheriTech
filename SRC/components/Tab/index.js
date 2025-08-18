import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DMSansRegular from '../DMSansRegular';
import { vh, vw } from '../../assets/themes/dimension';

const Tab = ({ name }) => {
  return (
    <View style={styles.container}>
      <DMSansRegular />
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    backgroundColor: 'white',
    // justifyContent: 'center',

    alignItems: 'center',

    paddingVertical: vh * 1.5,
    flexDirection: 'row',
    paddingHorizontall: vw * 1.5,
    flex: 1,
  },
});
