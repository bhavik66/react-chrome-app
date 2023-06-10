import React, { useEffect } from 'react';
import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import Icon from '../Icon';
import { searchIcon } from '../../assets';
import { useSearchDish } from '../../queries/dish';

import * as s from './styles';
import { getDifficultyIcon, getDifficultyText } from '../../utils';

export interface SearchProps {
  onSelect: (id: any) => void;
}

const Search: React.FC<SearchProps> = ({ onSelect }) => {
  const { isLoading, mutate, data } = useSearchDish();

  const options = data || []; // If data is null or undefined, provide an empty array as options

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Box>
      <Autocomplete
        autoFocus
        options={options}
        getOptionLabel={(option) => option.name}
        autoHighlight
        size="small"
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search cousine"
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <Icon icon={searchIcon} />
                </InputAdornment>
              ),
              endAdornment: (
                <React.Fragment>
                  {isLoading ? (
                    <CircularProgress color="secondary" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
            sx={s.styledForTextField}
          />
        )}
        renderOption={(props, option) => (
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            component="li"
            {...props}
          >
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.origin.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.origin.toLowerCase()}.png 2x`}
                alt=""
              />
              <Typography color={'white'} fontSize={'16px'} lineHeight={'20px'}>
                {option.name}
              </Typography>
            </Stack>
            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Icon icon={getDifficultyIcon(option.difficulty)} size={12} />
              <Typography
                fontWeight={700}
                color={'white'}
                fontSize={'18px'}
                lineHeight={'24px'}
              >
                {getDifficultyText(option.difficulty)}
              </Typography>
            </Stack>
          </Stack>
        )}
        onChange={(event, value) => onSelect(value.id)}
      />
    </Box>
  );
};

export default Search;
