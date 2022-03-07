import {
  FC, ReactElement, useEffect, useState
} from 'react';
import { useSpaceStore } from '../state';

import LaunchesMain from '../components/launches/LaunchesMain';

// Arrow functions
const Launches: FC = (): ReactElement => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    useSpaceStore.getState().spaceFetchData();
    // call Method from store
    // axios('https://api.spacexdata.com/v5/launches')
    //   .then((response) => {
    //     // reduce the date
    //     const reducedLaunches = response.data.map((item:any) => ({
    //       id: item.id,
    //       name: item.name,
    //       details: item.details,
    //       success: item.success,
    //       patch: item.links.patch.small
    //     }));
    //     // console.log(reducedLaunches);
    //     // change the state
    //     setLaunches(reducedLaunches);
    //   }).catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  // console.log(launches);
  return (
    <LaunchesMain launches={launches} today />
  );
};
export default Launches;
