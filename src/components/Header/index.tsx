import React from 'react';
import { Button, Grid, Stack } from '@mui/material';
import { mediumButton, telegramButton, twitterButton } from '../../assets';

import * as s from './styles';
import Icon from '../Icon';
import COLORS from '../../theme/colors';

export interface HeaderProps {
  title: string;
  origin: string;
  social?: {
    twitter: string;
    telegram: string;
    medium: string;
    website: string;
  };
  onAddRecipe: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  origin,
  social = {
    twitter: 'https://twitter.com',
    telegram: 'https://telegram.org',
    medium: 'https://medium.com',
  },
  onAddRecipe,
}) => {
  return (
    <s.Container>
      <Grid container alignItems={'center'}>
        <Grid item xs={6}>
          <Stack direction={'row'} spacing={2} alignItems={'center'} mr={2}>
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${origin.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${origin.toLowerCase()}.png 2x`}
              alt=""
            />
            <s.Title>{title}</s.Title>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction={'row'} spacing={1} justifyContent={'flex-end'}>
            <s.IconButton onClick={() => window.open(social.twitter, '_blank')}>
              <Icon icon={twitterButton} size={24} />
            </s.IconButton>
            <s.IconButton
              onClick={() => window.open(social.telegram, '_blank')}
            >
              <Icon icon={telegramButton} size={24} />
            </s.IconButton>
            <s.IconButton onClick={() => window.open(social.medium, '_blank')}>
              <Icon icon={mediumButton} size={24} />
            </s.IconButton>
            <Button
              variant="contained"
              size="small"
              sx={{
                whiteSpace: 'nowrap',
                fontSize: '10px',
                backgroundColor: COLORS.mirage,
              }}
              onClick={onAddRecipe}
            >
              + Add Recipe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </s.Container>
  );
};

export default Header;
