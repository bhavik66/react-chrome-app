import { Stack } from '@mui/material';

import * as s from './styles';
import GradientText from '../GradientText';
import { InfoType } from '../../types';

export interface InfoProps {
  label: string;
  info: InfoType | InfoType[];
}

const Info: React.FC<InfoProps> = ({ label, info }) => {
  return (
    <Stack>
      <s.Label>{label}</s.Label>
      <GradientText data={info} />
    </Stack>
  );
};

export default Info;
