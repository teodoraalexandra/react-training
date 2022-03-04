import create from 'zustand';

import { logger } from './middleware';

const initialState: any = {
  alert: null,
  showLoading: false,
};

const store = (set: any) => ({
  ...initialState,

  appResetAll: () => set({ ...initialState }),

  appResetAlert: () => set({ alert: null }),

  appSetAlert: (alert: any) => set({ alert }),

  appSetShowLoading: (showLoading: boolean) => set({ showLoading }),

});

const useAppStore = create(logger(store));
export default useAppStore;
