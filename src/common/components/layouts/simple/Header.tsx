import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import {
  AppBar, Toolbar, Link, Typography
} from '@mui/material';

import logo from '../../../../assets/images/mercedes-benz.svg';

const Header = (): ReactElement => (
  <AppBar sx={{ background: '#fff', height: '60px' }}>
    <Toolbar>
      <Link underline="hover" color="primary" component={RouterLink} to="/">
        <img style={{ height: '50px' }} src={logo} alt="Logo Mercedes" title="Logo Mercedes" />
        <Typography sx={{ ml: 1, mt: 1.6 }} variant="h6">Back to Dashboard</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default Header;
