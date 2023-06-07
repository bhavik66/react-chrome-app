import { Typography, styled } from '@mui/material';
import { InfoType } from '../../types';

const Text = styled(Typography)<{
  severity: InfoType['severity'];
}>(({ severity }) => ({
  background:
    severity === 'low'
      ? 'linear-gradient(136.39deg, #2bf1e5 3.18%, #40e33d 102.04%)'
      : severity === 'medium'
      ? 'linear-gradient(136.39deg, #ffbf43 3.18%, #ff4869 102.04%)'
      : severity === 'high'
      ? 'red'
      : 'white',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: '16px',
  lineHeight: '20px',
  fontWeight: '600',
}));

export { Text };
