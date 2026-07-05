import React from 'react';
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useResponsive } from '../../hooks/useResponsive';
import { colors } from '../../theme';

export interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  centered?: boolean;
  style?: ViewStyle;
  contentStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  scrollable = false,
  centered = false,
  style,
  contentStyle,
  testID,
}) => {
  const { contentMaxWidth, horizontalPadding } = useResponsive();

  const content = (
    <View
      testID={testID}
      style={[
        styles.content,
        {
          maxWidth: contentMaxWidth,
          paddingHorizontal: horizontalPadding,
        },
        centered && styles.centered,
        contentStyle,
      ]}>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, style]} edges={['top', 'bottom']}>
      {scrollable ? (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  centered: {
    justifyContent: 'center',
  },
});
