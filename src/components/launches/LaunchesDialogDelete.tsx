import { ReactElement } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

const LaunchesDialogDelete = ({ open, onClose, onDelete }: any): ReactElement => (
  <Dialog open={open} fullWidth onClose={onClose}>
    <DialogTitle>Are you sure?</DialogTitle>
    <DialogContent>
      <Typography>It is dangerous, are you sure you want to delete?</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Cancel</Button>
      <Button variant="contained" onClick={onDelete}>Delete</Button>
    </DialogActions>
  </Dialog>
);

export default LaunchesDialogDelete;
