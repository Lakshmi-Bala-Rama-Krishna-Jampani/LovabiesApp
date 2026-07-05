import { useWindowDimensions } from 'react-native';

import {
  getContentMaxWidth,
  getHeroHeight,
  getHorizontalPadding,
  getPlushImageHeight,
  isLandscape,
  isTablet,
  moderateScale,
} from '../utils/responsive';

export interface ResponsiveMetrics {
  width: number;
  height: number;
  isTabletDevice: boolean;
  isLandscapeMode: boolean;
  contentMaxWidth: number;
  horizontalPadding: number;
  heroHeight: number;
  plushImageHeight: number;
  ms: (size: number, factor?: number) => number;
}

export const useResponsive = (): ResponsiveMetrics => {
  const { width, height } = useWindowDimensions();
  const dimensions = { width, height };
  const isLandscapeMode = isLandscape(width, height);

  return {
    width,
    height,
    isTabletDevice: isTablet(width, height),
    isLandscapeMode,
    contentMaxWidth: getContentMaxWidth(width, height),
    horizontalPadding: getHorizontalPadding(width, height),
    heroHeight: getHeroHeight(width, height, isLandscapeMode),
    plushImageHeight: getPlushImageHeight(width, height, isLandscapeMode),
    ms: (size: number, factor = 0.5) => moderateScale(size, factor, dimensions),
  };
};
