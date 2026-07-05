export interface ComparisonFeature {
  key:
    | 'comparison.features.listenOnPhone'
    | 'comparison.features.basicStories'
    | 'comparison.features.hugAndListen'
    | 'comparison.features.offlinePlayback'
    | 'comparison.features.physicalButtons'
    | 'comparison.features.fullLibrary'
    | 'comparison.features.recordVoice'
    | 'comparison.features.sleepTimer'
    | 'comparison.features.contentUpdates';
  appOnly: boolean;
  appPlusPlush: boolean;
}

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    key: 'comparison.features.listenOnPhone',
    appOnly: true,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.basicStories',
    appOnly: true,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.hugAndListen',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.offlinePlayback',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.physicalButtons',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.fullLibrary',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.recordVoice',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.sleepTimer',
    appOnly: false,
    appPlusPlush: true,
  },
  {
    key: 'comparison.features.contentUpdates',
    appOnly: false,
    appPlusPlush: true,
  },
];
