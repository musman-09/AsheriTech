import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import DMSansBold from '../../../components/DMSansBold';
import InputFeild from '../../../components/InputFeild';
import { vh, vw } from '../../../assets/themes/dimension';

const CreatePassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.heading}>
          <DMSansBold
            name={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
            }
            style={{ textAlign: 'left', fontSize: vw * 5 }}
          />
        </View>

        <InputFeild placeholder={'Password'} />

        <InputFeild placeholder={'Confirm Password'} />
      </View>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  subContainer: {
    gap: vh * 3,
    paddingHorizontal: vw * 4,
  },
  heading: {
    marginTop: vh * 4,
  },
});
