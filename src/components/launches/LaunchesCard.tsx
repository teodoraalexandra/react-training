import { ReactElement, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { SpaceStoreState } from '../../state/spaceStore';

import { useSpaceStore } from '../../state';

import Placeholder from '../../assets/images/placeholder.jpg';

import LaunchesDialogDelete from './LaunchesDialogDelete';
import { RocketItem } from '../../models/models';

const LaunchesCard = (props: { item: RocketItem; }): ReactElement => {
  // const { t } = useTranslation();
  // const navigate = useNavigate();

  const { spaceDeleteLaunch } = useSpaceStore((state: SpaceStoreState) => state);

  const [openDialogDelete, setOpenDialogDelete] = useState(false);

  const { item } = props;
  const {
    id,
    name,
    details,
    patch,
    success
  } = item;

  const handleToggleDialogOpen = () => setOpenDialogDelete(!openDialogDelete);
  const handleDelete = () => spaceDeleteLaunch(id);

  return (
    <>
      <LaunchesDialogDelete open={openDialogDelete} onClose={handleToggleDialogOpen} onDelete={handleDelete} />
      <Card
        sx={{
          m: 2,
          width: '20vw',
          minHeight: 200,
          background: success ? 'white' : 'tomato',
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={patch || Placeholder}
            alt="Mission badge"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleToggleDialogOpen}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default LaunchesCard;
