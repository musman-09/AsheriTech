import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomButton from '../Button';
import { icons } from '../../assets';
import { vh, vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';
import DMSansBold from '../DMSansBold';
import { useNavigation } from '@react-navigation/native';

const TopHeader = ({ title, goBack }) => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={goBack ? goBack : onPressBack}>
          <Image source={icons.backArrow} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTitle}>
        <DMSansBold style={styles.headerTitle} name={title} />
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    backgroundColor: 'white',
    // justifyContent: 'center',
    gap: vw * 5,
    alignItems: 'center',

    paddingVertical: vh * 1.5,
    flexDirection: 'row',
  },
  iconContainer: {
    paddingHorizontal: vw * 4,
    paddingVertical: vh * 1,
    borderRadius: vw * 3,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    marginLeft: vw * 3,
    // alignSelf: 'flex-start',
    maxWidth: vw * 25,
  },
  icon: {
    width: vw * 7,
    height: vw * 7,
    resizeMode: 'contain',
  },
  headerTitle: {
    // borderWidth: 2,
    fontSize: vw * 5.5,
  },
});
