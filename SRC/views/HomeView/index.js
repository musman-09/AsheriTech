import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { icons, images } from '../../assets';
import { styles } from './style';
import DMSansBold from '../../components/DMSansBold';
import { vh, vw } from '../../assets/themes/dimension';
import CustomButton from '../../components/Button';
import { COLORS } from '../../assets/themes/Colors';
import TopHeader from '../../components/TopHeader';
import DMSansRegular from '../../components/DMSansRegular';
import Tab from '../../components/Tab';

const HomeView = ({ tabsData }) => {
  const renderItem = data => {
    <>
      {console.log(data, 'data')}
      <Tab name={data?.name} />;
    </>;
  };
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

        <View
          style={
            {
              // borderWidth: 2,
            }
          }
        >
          <ImageBackground
            source={images.homeWallpaper}
            style={styles.homeWallpaper}
          >
            <View
              style={{
                height: '100%',
                justifyContent: 'center',
              }}
            >
              <View style={{ width: vw * 50, left: 10 }}>
                <DMSansBold
                  name={'Seamless\nTech\nEducation'}
                  style={styles.seamlessTitle}
                />

                <TouchableOpacity>
                  <CustomButton
                    title={'Browse Now'}
                    buttonContainer={{
                      backgroundColor: COLORS.buttonBackground,
                      width: '80%',
                      paddingHorizontal: vw,
                      top: vh * 0.5,
                    }}
                    container={styles.browseButton}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.courseCategories}>
          <DMSansBold style={styles.courseFont} name={'Course Categories'} />
          <DMSansRegular style={styles.viewAll} name={'View All'} />
        </View>

        <FlatList
          data={tabsData}
          contentContainerStyle={{ borderWidth: 2, height: 100 }}
          style={{ backgroundColor: 'red' }}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

export default HomeView;
