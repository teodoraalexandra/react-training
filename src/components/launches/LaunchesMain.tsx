import {
  FC, ReactElement, useEffect
} from 'react';
import {
  Typography, Grid, Pagination, Button
} from '@mui/material';

import { useSpaceStore, usePaginationStore } from '../../state';

import LaunchesCard from './LaunchesCard';
import { SpaceStoreState } from '../../state/spaceStore';
import { PaginationStoreState } from '../../state/paginationStore';
import { RocketItem } from '../../models/models';

type LaunchesMainProps = {
  launches: RocketItem[];
  today: boolean;
}

// Arrow functions
const LaunchesMain = (props: LaunchesMainProps): ReactElement => {
  const { launches, today } = props;
  const { launchesRockets, spaceFetchData } = useSpaceStore((state: SpaceStoreState) => state);

  const {
    init,
    jump,
    currentPage,
    maxPage,
    paginatedData
  } = usePaginationStore((state: PaginationStoreState) => state);

  // init(launches, 4, 1)

  useEffect(() => {
    init(launchesRockets, 4, 1);
  }, [launchesRockets]);

  console.log(props);
  return (
    <>
      <Typography gutterBottom variant="h4">Launches</Typography>
      <Typography gutterBottom sx={{ mb: 5 }}>Show all the SpaceX launches</Typography>
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        {
        paginatedData.map((item: RocketItem) => <LaunchesCard key={item.id} item={item} />)
      }
      </Grid>
      { paginatedData.length > 0 && <Pagination count={maxPage} page={currentPage} onChange={(event, value) => jump(value)} /> }
      { paginatedData.length === 0 && <Typography variant="h4">no launches found...</Typography> }
      <Button onClick={spaceFetchData}>Reload all data</Button>
    </>
  );
};
export default LaunchesMain;
