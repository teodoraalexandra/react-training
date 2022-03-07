import { AlertColor } from '@mui/material';

export interface RocketItem {
  id: string;
  name: string;
  details: string;
  patch: string;
  success: boolean;
  links: RocketItemLink;
}

export interface TitleTypes {
  info: string,
  error: string,
  success: string,
  alert: string
}

export interface CustomAlert {
  text: string,
  severity: AlertColor,
  duration: number
}

export enum TitleEnum {
  info = 'Info',
  error = 'Error',
  success = 'Success',
  alert = 'Warning'
}

interface RocketItemLink {
  patch: { small: string; large: string }
}
