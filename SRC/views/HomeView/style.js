import { StyleSheet } from 'react-native';
import { vh, vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    // borderWidth: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: vw * 2,
    paddingHorizontal: vw * 1.6,
    backgroundColor: COLORS.white,
    // borderWidth: 2,
    paddingTop: vh * 2,
    paddingBottom: vh,
  },
  burger: {
    width: vw * 8,
    height: vh * 3,
    resizeMode: 'contain',
  },
  logo: {
    width: vw * 30,
    height: vh * 6,
    resizeMode: 'contain',
    // borderWidth: 2,
  },
  icons: {
    width: vw * 7,
    height: vh * 6,
    resizeMode: 'contain',
  },
  headerRightIcons: {
    flexDirection: 'row',
    // borderWidth: 2,
    gap: vw * 2,
  },
  homeWallpaper: {
    // borderWidth: 2,
    height: vh * 30,
    width: '100%',
  },
  seamlessTitle: {
    fontSize: vw * 8,
    fontWeight: '700',

    textAlign: 'left',
  },
  courseCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginHorizontal: vw * 2,
    marginTop: vh * 1.5,
  },
  courseFont: {
    fontSize: vw * 6,
    color: COLORS.headingColor,
  },
  viewAll: {
    fontSize: vw * 4,
    color: COLORS.headingColor,
  },
});
