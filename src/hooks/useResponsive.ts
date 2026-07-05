import { useWindowDimensions } from 'react-native';

import {
  getContentMaxWidth,
  getHorizontalPadding,
  isLandscape,
  isTablet,
} from '../utils/responsive';

export interface ResponsiveMetrics {
  width: number;
  height: number;
  isTabletDevice: boolean;
  isLandscapeMode: boolean;
  contentMaxWidth: number;
  horizontalPadding: number;
}

export const useResponsive = (): ResponsiveMetrics => {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isTabletDevice: isTablet(width, height),
    isLandscapeMode: isLandscape(width, height),
    contentMaxWidth: getContentMaxWidth(width, height),
    horizontalPadding: getHorizontalPadding(width, height),
  };
};
