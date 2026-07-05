import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Typography } from './Typography';
import { COMPARISON_FEATURES } from '../../constants/comparisonFeatures';
import { colors, radius, spacing } from '../../theme';
import { moderateScale } from '../../utils/responsive';

export interface ComparisonTableProps {
  appOnlyLabel: string;
  appPlusPlushLabel: string;
  getFeatureLabel: (key: (typeof COMPARISON_FEATURES)[number]['key']) => string;
}

const StatusIcon: React.FC<{ available: boolean }> = ({ available }) => {
  return (
    <View
      style={[
        styles.iconCircle,
        { backgroundColor: available ? colors.successBackground : colors.errorBackground },
      ]}>
      <MaterialCommunityIcons
        name={available ? 'check' : 'close'}
        size={moderateScale(16)}
        color={colors.textPrimary}
      />
    </View>
  );
};

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  appOnlyLabel,
  appPlusPlushLabel,
  getFeatureLabel,
}) => {
  return (
    <View style={styles.container} accessibilityRole="summary">
      <View style={styles.headerRow}>
        <View style={styles.featureHeaderCell} />
        <Typography variant="caption" align="center" style={styles.columnHeader}>
          {appOnlyLabel}
        </Typography>
        <Typography variant="caption" align="center" style={styles.columnHeader}>
          {appPlusPlushLabel}
        </Typography>
      </View>

      {COMPARISON_FEATURES.map(feature => (
        <View key={feature.key} style={styles.row}>
          <Typography variant="caption" style={styles.featureCell}>
            {getFeatureLabel(feature.key)}
          </Typography>
          <View style={styles.statusCell}>
            <StatusIcon available={feature.appOnly} />
          </View>
          <View style={styles.statusCell}>
            <StatusIcon available={feature.appPlusPlush} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: spacing.sm,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
    marginBottom: spacing.xs,
  },
  featureHeaderCell: {
    flex: 2,
  },
  columnHeader: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
  },
  featureCell: {
    flex: 2,
    paddingRight: spacing.xs,
  },
  statusCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: moderateScale(28),
    height: moderateScale(28),
    borderRadius: moderateScale(14),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
