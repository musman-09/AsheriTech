import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import TopHeader from '../../../components/TopHeader';
import { icons } from '../../../assets';
import { vh, vw } from '../../../assets/themes/dimension';
import InputFeild from '../../../components/InputFeild';
import { COLORS } from '../../../assets/themes/Colors';

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={icons.profile} style={styles.profile} />

        <InputFeild
          inputStyle={{
            backgroundColor: COLORS.inputFeildColor,
            width: '100%',
          }}
          placeholder={'Name'}
        />

        <InputFeild
          inputStyle={{
            backgroundColor: COLORS.inputFeildColor,
            width: '100%',
          }}
          placeholder={'Email'}
        />

        <InputFeild
          inputStyle={{
            backgroundColor: COLORS.inputFeildColor,
            width: '100%',
          }}
          placeholder={'Phone Number'}
        />

        <InputFeild
          inputStyle={{
            backgroundColor: COLORS.inputFeildColor,
            width: '100%',
          }}
          mask={[
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
          ]}
          placeholder={'Cnic'}
        />
      </View>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // flex: 1,
    // alignItems : 'center'
    // borderWidth: 2,
  },
  subContainer: {
    // borderWidth: 2,
    alignItems: 'center',
    gap: vh * 2.5,
  },
  profile: {
    width: vw * 25,
    height: vw * 25,
    resizeMode: 'contain',
    marginTop: vh * 12,
  },
});
