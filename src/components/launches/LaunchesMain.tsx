import {
  FC, ReactElement, useEffect
} from 'react';
import {
  Typography, Grid, Pagination, Button
} from '@mui/material';

import { useSpaceStore, usePaginationStore } from '../../state';

import LaunchesCard from './LaunchesCard';

// Arrow functions
const LaunchesMain: FC<any> = (props:any): ReactElement => {
  // const { launches } = props;

  const { launches, spaceFetchData } = useSpaceStore((state:any) => state);

  const {
    init,
    jump,
    currentPage,
    maxPage,
    paginatedData
  } = usePaginationStore((state:any) => state);

  // init(launches, 4, 1)

  useEffect(() => {
    init(launches, 4, 1);
  }, [launches]);

  console.log(props);
  return (
    <>
      <Typography gutterBottom variant="h4">Launches</Typography>
      <Typography gutterBottom sx={{ mb: 5 }}>Show all the SpaceX launches</Typography>
      <Grid container spacing={{ xs: 3, lg: 4 }}>
        {
        paginatedData.map((item:any) => <LaunchesCard key={item.id} item={item} />)
      }
      </Grid>
      { paginatedData.length > 0 && <Pagination count={maxPage} page={currentPage} onChange={(event, value) => jump(value)} /> }
      { paginatedData.length === 0 && <Typography variant="h4">no launches found...</Typography> }
      <Button onClick={spaceFetchData}>Reload all data</Button>
    </>
  );
};
export default LaunchesMain;
