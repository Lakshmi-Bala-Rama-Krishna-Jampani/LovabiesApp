export type PlushId = 'zeezee' | 'guffy';

export interface PlushOption {
  id: PlushId;
  nameKey: 'plushSelection.zeezeeName' | 'plushSelection.guffyName';
  taglineKey: 'plushSelection.zeezeeTagline' | 'plushSelection.guffyTagline';
  imageKey: 'zeezeeFull' | 'guffyFull';
  backgroundColor: string;
}

export const PLUSH_OPTIONS: PlushOption[] = [
  {
    id: 'zeezee',
    nameKey: 'plushSelection.zeezeeName',
    taglineKey: 'plushSelection.zeezeeTagline',
    imageKey: 'zeezeeFull',
    backgroundColor: '#FF6B9D',
  },
  {
    id: 'guffy',
    nameKey: 'plushSelection.guffyName',
    taglineKey: 'plushSelection.guffyTagline',
    imageKey: 'guffyFull',
    backgroundColor: '#F5C518',
  },
];
