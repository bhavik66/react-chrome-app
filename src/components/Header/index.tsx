import React from 'react';
import { Grid, Stack } from '@mui/material';
import {
  internetButton,
  mediumButton,
  spainFlag,
  telegramButton,
  twitterButton,
} from '../../assets';

import * as s from './styles';
import Icon from '../Icon';

export interface HeaderProps {
  title: string;
  social: {
    twitter: string;
    telegram: string;
    medium: string;
    website: string;
  };
}

const Header: React.FC<HeaderProps> = ({ title, social }) => {
  return (
    <s.Container>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}>
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <Icon icon={spainFlag} />
            <s.Title>{title}</s.Title>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={'row'} spacing={1} justifyContent={'flex-end'}>
            <s.IconButton onClick={() => window.open(social.twitter, '_blank')}>
              <Icon icon={twitterButton} size={30} />
            </s.IconButton>
            <s.IconButton
              onClick={() => window.open(social.telegram, '_blank')}
            >
              <Icon icon={telegramButton} size={30} />
            </s.IconButton>
            <s.IconButton onClick={() => window.open(social.medium, '_blank')}>
              <Icon icon={mediumButton} size={30} />
            </s.IconButton>
            <s.IconButton onClick={() => window.open(social.website, '_blank')}>
              <Icon icon={internetButton} size={30} />
            </s.IconButton>
          </Stack>
        </Grid>
      </Grid>
    </s.Container>
  );
};

export default Header;
