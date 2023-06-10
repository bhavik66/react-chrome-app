import React from 'react';

import * as s from './styles';
import { Stack } from '@mui/material';
import { InfoType } from '../../types';

export interface GradientTextProps {
  data: InfoType | InfoType[];
}

const GradientText: React.FC<GradientTextProps> = ({ data }) => {
  return (
    <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'}>
      {Array.isArray(data) ? (
        data.map((x, i) => (
          <React.Fragment key={`${i}`}>
            <s.Text severity={x.severity}>{x.value}</s.Text>
            {i !== data.length - 1 && (
              <s.Text severity="none">&nbsp;{'/'}&nbsp;</s.Text>
            )}
          </React.Fragment>
        ))
      ) : (
        <s.Text severity={data.severity}>{data.value}</s.Text>
      )}
    </Stack>
  );
};

export default GradientText;
