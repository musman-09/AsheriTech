import { StyleSheet } from 'react-native';
import { vh, vw } from '../../assets/themes/dimension';
import { COLORS } from '../../assets/themes/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: 'white',
    gap: vh * 2.5,
    paddingHorizontal: vw * 2,
  },
});
