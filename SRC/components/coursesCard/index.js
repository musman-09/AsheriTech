import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { icons } from '../../assets';
import DMSansBold from '../DMSansBold';
import { vh, vw } from '../../assets/themes/dimension';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { COLORS } from '../../assets/themes/Colors';

const CoursesCard = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <Image
            source={image}
            style={{ width: '100%', height: '100%', borderRadius: vw * 3 }}
          />
          <Image source={icons.wishlist} style={styles.wishlist} />
        </View>
      </View>

      <View style={{ width: '100%' }}>
        <DMSansBold
          style={{
            // width: '80%',
            fontSize: 4.1 * vw,
            // borderWidth: 2,
            textAlign: 'left',
            // marginHorizontal: 'auto',
          }}
          name={name}
        />
      </View>
    </View>
  );
};

export default CoursesCard;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 2,
    gap: vh * 0.7,
    width: '45%',
  },

  imageContainer: {
    // borderWidth: 2,
    flexDirection: 'row',
    width: '100%',
    height: vh * 20,
    // gap: vw * 2,
    // backgroundColor: 'red',
  },
  image: {
    // width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
    position: 'relative',

    // borderWidth: 2,
    // width: '100%',
  },
  wishlist: {
    position: 'absolute',
    top: vh * 14,
    left: vw * 30,
    width: vw * 12,
    height: vw * 12,
    resizeMode: 'contain',
    // borderWidth: 2,
  },
});
