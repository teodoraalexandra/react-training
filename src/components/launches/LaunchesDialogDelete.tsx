import { MouseEventHandler, ReactElement } from 'react';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

type LaunchesDialogDeleteProps = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  onDelete: MouseEventHandler<HTMLButtonElement> | undefined;
}

const LaunchesDialogDelete = ({ open, onClose, onDelete }: LaunchesDialogDeleteProps): ReactElement => (
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
