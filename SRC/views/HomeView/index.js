import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { icons, images } from '../../assets';
import { styles } from './style';
import DMSansBold from '../../components/DMSansBold';
import { vw } from '../../assets/themes/dimension';
import CustomButton from '../../components/Button';
import { COLORS } from '../../assets/themes/Colors';

const HomeView = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={icons.hamBurger} style={styles.burger} />

          <Image source={images.appLogo} style={styles.logo} />

          <View style={styles.headerRightIcons}>
            <Image source={icons.search} style={styles.icons} />
            <Image source={icons.person} style={styles.icons} />
          </View>
        </View>

        <View style={{ borderWidth: 2 }}>
          <ImageBackground
            source={images.homeWallpaper}
            style={styles.homeWallpaper}
          >
            <View
              style={{
                borderWidth: 1,
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <View style={{ borderWidth: 2, width: vw * 50, left: 10 }}>
                <DMSansBold
                  name={'Seamless\nTech\nEducation'}
                  style={styles.seamlessTitle}
                />
                <CustomButton
                  title={'Browse Now'}
                  buttonContainer={{
                    backgroundColor: COLORS.buttonBackground,
                    width: '100%',
                  }}
                  container={styles.browseButton}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </>
  );
};

export default HomeView;
