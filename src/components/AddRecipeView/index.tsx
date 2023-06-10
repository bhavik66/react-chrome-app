import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as s from './styles';
import COLORS from '../../theme/colors';
import Icon from '../Icon';
import { backIcon } from '../../assets';
import { DishDetailType } from '../../types';
import React, { useEffect } from 'react';
import { useAddDish } from '../../queries/dish';

const countries = [
  {
    value: 'NA',
    label: 'Country Origin',
  },
  {
    value: 'US',
    label: 'US',
  },
  {
    value: 'IN',
    label: 'India',
  },
  {
    value: 'TH',
    label: 'Thailand',
  },
  {
    value: 'JP',
    label: 'Japan',
  },
];

const authenticity = [
  {
    value: 'unverified',
    label: 'Unverified',
  },
  {
    value: 'verified',
    label: 'Verified',
  },
];

const difficulty = [
  {
    value: '1',
    label: 'Easy',
  },
  {
    value: '2',
    label: 'Medium',
  },
  {
    value: '3',
    label: 'Hard',
  },
];

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  origin: yup.string().notOneOf(['NA']).required('Origin is required'),
  description: yup.string().required('Description is required'),
  difficulty: yup.string().required('Difficulty is required'),
  protein: yup.string().required('Protein is required'),
  produce: yup.string().required('Produce is required'),
  spice: yup.string().required('Spice is required'),
  cookingOil: yup.string().required('Cooking Oil is required'),
  volume: yup.number().required('Volume is required'),
  serves: yup.number().required('Serves is required'),
  authenticity: yup.string().required('Authenticity is required'),
  stock: yup.string().required('Stock is required'),
});

export interface AddRecipeViewProps {
  onBack: () => void;
}

const AddRecipeView: React.FC<AddRecipeViewProps> = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DishDetailType>({
    resolver: yupResolver(validationSchema),
  });

  const { isLoading, isSuccess, mutate } = useAddDish();

  const onSubmit = (data: DishDetailType) => {
    // Handle form submission
    mutate(data);
  };

  useEffect(() => {
    if (isSuccess) {
      onBack();
    }
  }, [isSuccess]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction={'row'} alignItems={'center'} mb={0.75}>
        <IconButton onClick={onBack}>
          <Icon icon={backIcon} size={14} />
        </IconButton>
        <Typography fontWeight={700} fontSize={'18px'} color={'white'}>
          Add new recipe
        </Typography>
      </Stack>
      <Divider sx={{ backgroundColor: COLORS.tuna, mb: 2 }} />
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Name
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            {...register('name')}
            error={!!errors.name}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Origin
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            sx={s.styledForTextField}
            defaultValue={'NA'}
            {...register('origin')}
            error={!!errors.origin}
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Description
          </Typography>
          <TextField
            size="small"
            sx={{
              ...s.styledForTextField,
              maxHeight: '100px',
              height: '100px',
              overflow: 'scroll',
            }}
            inputProps={{
              style: {
                height: '80px',
              },
            }}
            placeholder="Describe your recipe..."
            fullWidth
            multiline
            {...register('description')}
            error={!!errors.description}
          />
          <Typography>0/200 Characters</Typography>
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Difficulty
          </Typography>
          <TextField
            select
            size="small"
            sx={s.styledForTextField}
            defaultValue={'1'}
            fullWidth
            {...register('difficulty')}
            error={!!errors.difficulty}
          >
            {difficulty.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Protein
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            {...register('protein')}
            error={!!errors.protein}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Produce
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            {...register('produce')}
            error={!!errors.produce}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Spice
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            {...register('spice')}
            error={!!errors.spice}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Cooking Oil?
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            {...register('cookingOil')}
            error={!!errors.cookingOil}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Volume
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    color={COLORS.whiteLilac}
                    fontWeight={300}
                    fontSize={'14px'}
                  >
                    grams
                  </Typography>
                </InputAdornment>
              ),
            }}
            {...register('volume')}
            error={!!errors.volume}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Serves
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    color={COLORS.whiteLilac}
                    fontWeight={300}
                    fontSize={'14px'}
                  >
                    people
                  </Typography>
                </InputAdornment>
              ),
            }}
            {...register('serves')}
            error={!!errors.serves}
          />
        </Grid>
        <Grid xs={6} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Authenticity
          </Typography>
          <TextField
            select
            fullWidth
            size="small"
            sx={s.styledForTextField}
            defaultValue={'unverified'}
            {...register('authenticity')}
            error={!!errors.authenticity}
          >
            {authenticity.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid xs={12} item>
          <Typography fontSize={'16px'} color={'white'} mb={0.75}>
            Stock
          </Typography>
          <TextField
            size="small"
            sx={s.styledForTextField}
            fullWidth
            {...register('stock')}
            error={!!errors.stock}
          />
        </Grid>
        <Grid xs={12} item>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="info"
              sx={{ backgroundColor: COLORS.cornflowerBlue, color: 'white' }}
              onClick={handleSubmit(onSubmit)}
            >
              Add Recipe
            </Button>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddRecipeView;
