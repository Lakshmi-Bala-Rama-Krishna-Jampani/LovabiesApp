import { ROUTES } from '../constants/navigation';
import { PlushId } from '../constants/plush';

export type RootStackParamList = {
  [ROUTES.LANGUAGE_SELECTION]: undefined;
  [ROUTES.WELCOME]: undefined;
  [ROUTES.PLUSH_SELECTION]: undefined;
  [ROUTES.COMPARISON]: undefined;
  [ROUTES.PARENTAL_GATE]: {
    selectedPlush?: PlushId;
  };
  [ROUTES.LANDING]: {
    selectedPlush?: PlushId;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
