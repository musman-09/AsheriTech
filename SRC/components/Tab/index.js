import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DMSansRegular from '../DMSansRegular';
import { vh, vw } from '../../assets/themes/dimension';

const Tab = ({ name }) => {
  return (
    <View style={styles.container}>
      <DMSansRegular style={styles.fontSize} name={name} />
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    borderRadius: vw * 6,
    alignItems: 'center',
    paddingVertical: vh * 1.5,
    flexDirection: 'row',
    paddingHorizontal: vw * 4.5,
    borderWidth: 2,
    // width: '30%',
  },
  fontSize: {
    fontSize: vw * 5,
  },
});
