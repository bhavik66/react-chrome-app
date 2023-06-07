import { Grid } from '@mui/material';

import Info from '../Info';
import { DishDetailType } from '../../types';

import * as s from './styles';

export interface InfoCardProps {
  data: DishDetailType['info'];
}

const InfoCard: React.FC<InfoCardProps> = ({ data }) => {
  return (
    <s.Container>
      <Grid container spacing={1.5}>
        <Grid item xs={6}>
          <Info label="Seafood" info={data.seafood} />
        </Grid>
        <Grid item xs={6}>
          <Info label="Produce" info={data.produce} />
        </Grid>
        <Grid item xs={6}>
          <Info label="Spices" info={data.spices} />
        </Grid>
        <Grid item xs={6}>
          <Info label="Olive Oil" info={data.oliveOil} />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Volume/Weight"
            info={{
              severity: 'none',
              value: data.volume + '',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info
            label="Serves"
            info={{
              severity: 'none',
              value: data.serve + '',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Info label="Authenticity" info={data.authenticity} />
        </Grid>
        <Grid item xs={6}>
          <Info label="Stock" info={data.stock} />
        </Grid>
      </Grid>
    </s.Container>
  );
};

export default InfoCard;
