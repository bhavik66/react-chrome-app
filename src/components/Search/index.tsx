import React, { useEffect } from 'react';
import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
} from '@mui/material';

import Icon from '../Icon';
import { searchIcon } from '../../assets';
import { useSearchDish } from '../../queries/dish';

import * as s from './styles';

export interface SearchProps {
  onSelect: (id: any) => void;
}

const Search: React.FC<SearchProps> = ({ onSelect }) => {
  const { isLoading, mutate, data } = useSearchDish();

  const options = data || []; // If data is null or undefined, provide an empty array as options

  useEffect(() => {
    mutate('');
  }, []);

  return (
    <Box>
      <Autocomplete
        autoFocus
        options={options}
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
        onChange={(event, value) => onSelect(value)}
      />
    </Box>
  );
};

export default Search;
