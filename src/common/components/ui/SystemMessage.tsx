import { FC, ReactElement } from 'react';

import { Alert, AlertTitle, Snackbar } from '@mui/material';

import { useAppStore } from '../../../state';
import { AppStoreState } from '../../../state/appStore';
import { TitleTypes, TitleEnum, CustomAlert } from '../../../models/models';

const SystemMessage:FC = ():ReactElement => {
  const alert: CustomAlert = useAppStore((state: AppStoreState) => state.alert);
  const resetAlert = useAppStore((state: AppStoreState) => state.appResetAlert);

  if (!alert) return <> </>;

  const { text, severity, duration } = alert;

  const handleOnClose = () => resetAlert();

  const titles = {
    info: 'Info',
    error: 'Error',
    success: 'Success',
    warning: 'Warning' // Fun fact here: before was alert. This is a perfect way for showing type mismatch
  };

  const alertSeverity = severity || 0;

  return (
    <Snackbar open={!!alert} autoHideDuration={duration || 5000} onClose={handleOnClose} sx={{ zIndex: '1550' }}>
      <Alert severity={severity} variant="filled">
        <AlertTitle sx={{ color: 'white' }}>{titles[alertSeverity]}</AlertTitle>
        {text}
      </Alert>
    </Snackbar>

  );
};

export default SystemMessage;
