import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { Typography } from './Typography';
import { colors, radius, shadows, spacing } from '../../theme';

export interface LandingFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  style?: ViewStyle;
}

export const LandingFeatureCard: React.FC<LandingFeatureCardProps> = ({
  title,
  description,
  icon,
  style,
}) => {
  return (
    <View style={[styles.card, style]} accessibilityRole="text">
      <View style={styles.iconContainer}>{icon}</View>
      <Typography variant="bodyBold" style={styles.title}>
        {title}
      </Typography>
      <Typography variant="caption" color={colors.textSecondary}>
        {description}
      </Typography>
    </View>
  );
};

export interface LandingHeroProps {
  title: string;
  subtitle: string;
  selectedPlushLabel?: string;
  illustration: React.ReactNode;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  title,
  subtitle,
  selectedPlushLabel,
  illustration,
}) => {
  return (
    <View style={styles.hero}>
      {illustration}
      <Typography variant="title" align="center">
        {title}
      </Typography>
      <Typography variant="subtitle" align="center" color={colors.textSecondary}>
        {subtitle}
      </Typography>
      {selectedPlushLabel ? (
        <Typography variant="bodyBold" align="center" style={styles.selectedPlush}>
          {selectedPlushLabel}
        </Typography>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  selectedPlush: {
    marginTop: spacing.xs,
    color: colors.landingAccent,
  },
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
    ...shadows.sm,
  },
  iconContainer: {
    marginBottom: spacing.sm,
  },
  title: {
    marginBottom: spacing.xxs,
  },
});
