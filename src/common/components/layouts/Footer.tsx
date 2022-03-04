/* eslint-disable max-len */
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Box, Typography, Divider
} from '@mui/material';

const Footer: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Box sx={{ textAlign: 'center', background: 'lightgrey' }}>
      <Divider />
      <Typography color="secondary" variant="h5">{t('common.footer.text')}</Typography>
    </Box>

  );
};

export default Footer;
