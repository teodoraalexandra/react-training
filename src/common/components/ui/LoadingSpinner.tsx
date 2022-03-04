import { ReactElement } from 'react';

import {
  Backdrop, Box
} from '@mui/material';

import { useAppStore } from '../../../state';

import AnimatedSpinner from '../../../assets/images/dog-time400.gif';

const stringAnimatedSpinner:string = AnimatedSpinner;

// in the future we will use an animation provided by the customer KIW, so dont worry about the ugly layout now :-)
const LoadingSpinner = ():ReactElement => {
  const showLoading = useAppStore((state:any) => state.showLoading);

  return (
    <Backdrop
      sx={{ color: 'white', zIndex: 9999 }}
      open={showLoading}
    >
      <Box component="img" src={stringAnimatedSpinner} alt="Loading animation" />
    </Backdrop>
  );
};

export default LoadingSpinner;
