import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Toolbar, useTheme } from '@mui/material';

import Header from './Header';
import Footer from '../Footer';

const Layout = ():ReactElement => {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
    >
      <Header />
      <Toolbar />
      <Box sx={{
        display: 'flex',
        flex: 1,
        width: '100%'
      }}
      >
        <Box sx={{ padding: theme.spacing(3) }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
