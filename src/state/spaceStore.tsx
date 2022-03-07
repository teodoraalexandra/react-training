import create from 'zustand';
import axios from 'axios';

import { logger } from './middleware.js';

import { useAppStore } from './index';
import { RocketItem } from '../models/models';

export interface SpaceStoreState {
  launchesRockets: RocketItem[];
}

const initialState: SpaceStoreState = {
  launchesRockets: []
};

type getAction = {
  launches: RocketItem[];
}

const store = (set: (param: SpaceStoreState) => void, get: () => getAction) => ({
  ...initialState,

  spaceFetchData: () => {
  // Loading spinner?
    useAppStore.setState({ showLoading: true });

    // call the api / error handling
    axios('https://api.spacexdata.com/v5/launches')
      .then((response) => {
        // reduce the date
        const reducedLaunches = response.data.map((item: RocketItem) => ({
          id: item.id,
          name: item.name,
          details: item.details,
          success: item.success,
          patch: item.links.patch.small
        }));
        // console.log(reducedLaunches);
        // change the store state
        set({ launchesRockets: reducedLaunches });
        useAppStore.setState({ showLoading: false, alert: { text: 'Data from SpaceX are loaded!', duration: 4000 } });
        // useAppStore.setState({ alert: { text: 'Data from SpaceX are loaded!', duration: 4000 } });
      }).catch((error) => {
        useAppStore.setState({ showLoading: false, alert: { text: 'Something wrong the SpaceX API!', duration: 10000, severity: 'error' } });
        console.log(error);
      });

    // display a success message?
  },

  spaceDeleteLaunch: (id: string) => {
    // filter out
    const filteredArray = get().launches.filter((item: RocketItem) => item.id !== id);

    // update state
    set({ launchesRockets: filteredArray });
  }

});

const useSpaceStore = create(logger(store));
export default useSpaceStore;
