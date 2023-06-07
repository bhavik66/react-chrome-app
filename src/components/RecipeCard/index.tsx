import { CardActions, CardContent, Stack } from '@mui/material';

import * as s from './styles';
import { dishIcon } from '../../assets';
import Icon from '../Icon';

export interface RecipeCardProps {
  recipe: string;
  fullRecipeWebsite: string;
  difficulty: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  fullRecipeWebsite,
  difficulty,
}) => {
  return (
    <s.Container elevation={0}>
      <s.Content variant="outlined">
        <CardContent sx={{ p: 2.5, pb: 2 }}>
          <Stack direction={'row'} spacing={1} mb={2}>
            <Icon icon={dishIcon} />
            <s.RecipeDifficultyText>
              Difficulty: {difficulty}
            </s.RecipeDifficultyText>
          </Stack>
          <s.RecipeContentText>{recipe}</s.RecipeContentText>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', pt: 0, pb: 1.25 }}>
          <s.Button
            variant="contained"
            disableElevation
            disableRipple
            onClick={() => window.open(fullRecipeWebsite, '_blank')}
          >
            View Full Recipe
          </s.Button>
        </CardActions>
      </s.Content>
    </s.Container>
  );
};

export default RecipeCard;
