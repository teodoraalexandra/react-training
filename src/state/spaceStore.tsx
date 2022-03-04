import create from 'zustand';
import axios from 'axios';

import { logger } from './middleware';

import { useAppStore } from './index';

const initialState: any = {
  launches: []
};

const store = (set: any, get: any) => ({
  ...initialState,

  spaceFetchData: () => {
  // Loading spinner?
    useAppStore.setState({ showLoading: true });

    // call the api / error handling
    axios('https://api.spacexdata.com/v5/launches')
      .then((response) => {
        // reduce the date
        const reducedLaunches = response.data.map((item:any) => ({
          id: item.id,
          name: item.name,
          details: item.details,
          success: item.success,
          patch: item.links.patch.small
        }));
        // console.log(reducedLaunches);
        // change the store state
        set({ launches: reducedLaunches });
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
    const filteredArray = get().launches.filter((item:any) => item.id !== id);

    // update state
    set({ launches: filteredArray });
  }

});

const useSpaceStore = create(logger(store));
export default useSpaceStore;
