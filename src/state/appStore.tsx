import create from 'zustand';

import { logger } from './middleware.js';
import { CustomAlert, TitleEnum } from '../models/models';

export interface AppStoreState {
  appResetAlert?: () => void;
  alert?: CustomAlert;
  showLoading?: boolean;
}

const initialState: AppStoreState = {
  alert: { text: '', severity: 'info', duration: 0 },
  showLoading: false,
};

const store = (set: (param: AppStoreState) => void) => ({
  ...initialState,

  appResetAll: () => set({ ...initialState }),

  appResetAlert: () => set({ alert: { text: '', severity: 'info', duration: 0 } }),

  appSetAlert: (alert: CustomAlert) => set({ alert }),

  appSetShowLoading: (showLoading: boolean) => set({ showLoading }),

});

const useAppStore = create(logger(store));
export default useAppStore;
