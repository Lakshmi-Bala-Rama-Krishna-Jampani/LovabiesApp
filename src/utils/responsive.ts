import { Dimensions, PixelRatio } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const getDimensions = () => Dimensions.get('window');

export const scale = (size: number): number => {
  const { width } = getDimensions();
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (size: number): number => {
  const { height } = getDimensions();
  return (height / guidelineBaseHeight) * size;
};

export const moderateScale = (size: number, factor = 0.5): number => {
  return size + (scale(size) - size) * factor;
};

export const normalize = (size: number): number => {
  return Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)));
};

export const isTablet = (width: number, height: number): boolean => {
  const shortestSide = Math.min(width, height);
  return shortestSide >= 600;
};

export const isLandscape = (width: number, height: number): boolean => {
  return width > height;
};

export const getContentMaxWidth = (width: number, height: number): number => {
  if (isTablet(width, height)) {
    return Math.min(width * 0.72, 720);
  }

  return width;
};

export const getHorizontalPadding = (width: number, height: number): number => {
  if (isTablet(width, height)) {
    return moderateScale(32);
  }

  return moderateScale(24);
};
