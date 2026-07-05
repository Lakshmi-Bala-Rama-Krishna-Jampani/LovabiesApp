import { ImageSourcePropType } from 'react-native';

export const images = {
  hero: require('../assets/images/Img1.png') as ImageSourcePropType,
  heroWide: require('../assets/images/Img2.png') as ImageSourcePropType,
  zeezeeFull: require('../assets/images/zeezee_full.png') as ImageSourcePropType,
  guffyFull: require('../assets/images/guffy_full.png') as ImageSourcePropType,
} as const;
