import { FC, ReactElement } from 'react';

import { Alert, AlertTitle, Snackbar } from '@mui/material';

import { useAppStore } from '../../../state';

const SystemMessage:FC = ():ReactElement => {
  const alert = useAppStore((state:any) => state.alert);
  const resetAlert = useAppStore((state:any) => state.appResetAlert);

  if (!alert) return <> </>;

  const { text, severity, duration } = alert;

  const handleOnClose = () => resetAlert();

  const titles: any = {
    info: 'Info',
    error: 'Error',
    success: 'Success',
    alert: 'Warning'
  };

  return (
    <Snackbar open={!!alert} autoHideDuration={duration || 5000} onClose={handleOnClose} sx={{ zIndex: '1550' }}>
      <Alert severity={severity} variant="filled">
        <AlertTitle sx={{ color: 'white' }}>{titles[severity]}</AlertTitle>
        {text}
      </Alert>
    </Snackbar>

  );
};

export default SystemMessage;
