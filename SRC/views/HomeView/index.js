import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
import CoursesCard from '../../components/coursesCard';

const HomeView = ({ tabsData, courseData }) => {
  const renderItem = ({ item }) => {
    return <Tab name={item?.name} />;
  };
  const renderItemCourses = ({ item }) => {
    return <CoursesCard image={item.Image} name={item.name} />;
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

        <ScrollView>
          <View>
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

          <View>
            <FlatList
              data={tabsData}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
              columnWrapperStyle={{
                flexWrap: 'wrap',

                marginBottom: vw,
                gap: vw * 4,
              }}
              contentContainerStyle={{
                paddingHorizontal: vw,
                gap: vw * 1,
                marginTop: vh,
              }}
            />
          </View>

          <View style={styles.courseCategories}>
            <DMSansBold style={styles.courseFont} name={'Suggested Course'} />
            <DMSansRegular style={styles.viewAll} name={'View All'} />
          </View>

          <View style={styles.coursesCardCategories}>
            <FlatList
              data={courseData}
              renderItem={renderItemCourses}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ gap: vw * 2 }}
              columnWrapperStyle={{
                justifyContent: 'space-between',
                // marginBottom: vh * 2,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeView;
