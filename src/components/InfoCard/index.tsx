import { Grid } from '@mui/material';
import Info from '../Info';

import * as s from './styles';

export interface InfoCardProps {
  protein: string;
  produce: string;
  spice: string;
  cookingOil: string;
  volume: number;
  serves: number;
  authenticity: string;
  stock: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  protein,
  produce,
  spice,
  cookingOil,
  volume,
  serves,
  authenticity,
  stock,
}) => {
  return (
    <s.Container>
      <Grid container spacing={1.5}>
        <Grid item xs={6}>
          <Info
            label="Protein"
            info={{
              severity: 'none',
              value: protein,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Produce"
            info={{
              severity: 'medium',
              value: produce,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Spices"
            info={{
              severity: 'medium',
              value: spice,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Olive Oil"
            info={{
              severity: 'medium',
              value: cookingOil,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Volume/Weight"
            info={{
              severity: 'none',
              value: volume + 'g',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Serves"
            info={{
              severity: 'none',
              value: serves + '',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Authenticity"
            info={{
              severity: 'medium',
              value: authenticity,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Stock"
            info={{
              severity: 'medium',
              value: stock,
            }}
          />
        </Grid>
      </Grid>
    </s.Container>
  );
};

export default InfoCard;
