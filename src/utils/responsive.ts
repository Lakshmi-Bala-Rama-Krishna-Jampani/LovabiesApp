import { Dimensions, PixelRatio, ScaledSize } from 'react-native';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const getDimensions = (): ScaledSize => Dimensions.get('window');

export const scale = (size: number, dimensions?: Pick<ScaledSize, 'width'>): number => {
  const width = dimensions?.width ?? getDimensions().width;
  return (width / guidelineBaseWidth) * size;
};

export const verticalScale = (
  size: number,
  dimensions?: Pick<ScaledSize, 'height'>,
): number => {
  const height = dimensions?.height ?? getDimensions().height;
  return (height / guidelineBaseHeight) * size;
};

export const moderateScale = (
  size: number,
  factor = 0.5,
  dimensions?: Pick<ScaledSize, 'width'>,
): number => {
  return size + (scale(size, dimensions) - size) * factor;
};

export const normalize = (size: number, dimensions?: Pick<ScaledSize, 'width'>): number => {
  return Math.round(PixelRatio.roundToNearestPixel(moderateScale(size, 0.5, dimensions)));
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

  if (isLandscape(width, height)) {
    return Math.min(width * 0.88, 760);
  }

  return width;
};

export const getHorizontalPadding = (width: number, height: number): number => {
  if (isTablet(width, height)) {
    return moderateScale(32, 0.5, { width });
  }

  if (isLandscape(width, height)) {
    return moderateScale(32, 0.5, { width });
  }

  return moderateScale(24, 0.5, { width });
};

export const getHeroHeight = (width: number, height: number, isLandscapeMode: boolean): number => {
  if (isLandscapeMode) {
    return Math.min(moderateScale(160, 0.5, { width }), height * 0.42);
  }

  return Math.min(moderateScale(260, 0.5, { width }), height * 0.34);
};

export const getPlushImageHeight = (
  width: number,
  height: number,
  isLandscapeMode: boolean,
): number => {
  if (isLandscapeMode) {
    return Math.min(moderateScale(120, 0.5, { width }), height * 0.45);
  }

  return moderateScale(160, 0.5, { width });
};
