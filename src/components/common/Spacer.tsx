import React from 'react';
import { View, ViewProps } from 'react-native';

import { spacing, SpacingToken } from '../../theme';

export interface SpacerProps extends ViewProps {
  size?: SpacingToken;
  horizontal?: boolean;
}

export const Spacer: React.FC<SpacerProps> = ({
  size = 'md',
  horizontal = false,
  style,
  ...rest
}) => {
  const value = spacing[size];

  return (
    <View
      {...rest}
      style={[
        horizontal ? { width: value } : { height: value },
        style,
      ]}
    />
  );
};
