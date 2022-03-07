import { FC, ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

import { DThemeOptions } from '@daimler/mui5-theme';
import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@material-ui/core';

import routes from './routes';

import './common/utils/configI18n';

import LoadingSpinner from './common/components/ui/LoadingSpinner';
import SystemMessage from './common/components/ui/SystemMessage';

const App: FC = (): ReactElement => {
  const content = useRoutes(routes);
  // something happens here
  return (
    <>
      <CssBaseline />
      <LoadingSpinner />
      <SystemMessage />
      <ThemeProvider theme={createTheme(DThemeOptions)}>
        {content}
      </ThemeProvider>
    </>
  );
};

export default App;
