export type PlushId = 'zeezee' | 'guffy';

export interface PlushOption {
  id: PlushId;
  name: string;
  taglineKey: 'plushSelection.zeezeeTagline' | 'plushSelection.guffyTagline';
  imageKey: 'zeezeeFull' | 'guffyFull';
  backgroundColor: string;
}

export const PLUSH_OPTIONS: PlushOption[] = [
  {
    id: 'zeezee',
    name: 'ZeeZee',
    taglineKey: 'plushSelection.zeezeeTagline',
    imageKey: 'zeezeeFull',
    backgroundColor: '#FF6B9D',
  },
  {
    id: 'guffy',
    name: 'Guffy',
    taglineKey: 'plushSelection.guffyTagline',
    imageKey: 'guffyFull',
    backgroundColor: '#F5C518',
  },
];
