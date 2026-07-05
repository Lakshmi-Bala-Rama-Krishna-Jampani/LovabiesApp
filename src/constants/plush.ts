export type PlushId = 'zeezee' | 'guffy';

export interface PlushOption {
  id: PlushId;
  nameKey: 'plushSelection.zeezeeName' | 'plushSelection.guffyName';
  taglineKey: 'plushSelection.zeezeeTagline' | 'plushSelection.guffyTagline';
  imageKey: 'zeezeeFull' | 'guffyFull';
}

export const PLUSH_OPTIONS: PlushOption[] = [
  {
    id: 'zeezee',
    nameKey: 'plushSelection.zeezeeName',
    taglineKey: 'plushSelection.zeezeeTagline',
    imageKey: 'zeezeeFull',
  },
  {
    id: 'guffy',
    nameKey: 'plushSelection.guffyName',
    taglineKey: 'plushSelection.guffyTagline',
    imageKey: 'guffyFull',
  },
];
