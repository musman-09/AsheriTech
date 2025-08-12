import { Platform } from 'react-native';

export const fonts = {
  DMSans: {
    bold: Platform.select({
      android: 'DMSans-Bold',
      ios: 'DMSans-Bold',
    }),
    regular: Platform.select({
      android: 'DMSans_18pt-Regular',
      ios: 'Aileron-Regular',
    }),
    light: Platform.select({
      android: 'Aileron-Light',
      ios: 'Aileron-Light',
    }),
    semibold: Platform.select({
      android: 'Aileron-SemiBold',
      ios: 'Aileron-SemiBold',
    }),
  },
};
