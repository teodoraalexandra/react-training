import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

// Arrow functions
const Dashboard: FC = (): ReactElement => {
  const navigate = useNavigate();

  const handleLaunches = () => navigate('/app/launches');

  return (
    <>
      <Typography variant="h4">Dashboard</Typography>
      <Typography>This is the beginning of a wonderful story...</Typography>
      <Button onClick={handleLaunches} variant="contained">Go to SpaceX launches</Button>
      {/* <Button onClick={() => navigate('/app/launches')} variant="contained">Go to SpaceX launches</Button> */}
    </>
  );
};

export default Dashboard;
