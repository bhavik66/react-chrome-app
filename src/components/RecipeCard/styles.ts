import {
  Button as MuiButton,
  Card,
  styled,
  Typography,
  Paper,
} from '@mui/material';

const Container = styled(Paper)`
  padding: ${(props) => props.theme.spacing(1.25)};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  border-radius: 6px;
`;

const Content = styled(Card)`
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.secondary.contrastText};
`;

const Button = styled(MuiButton)`
  text-transform: capitalize;
  font-weight: 500;
  border-radius: 6px;
`;

const RecipeDifficultyText = styled(Typography)`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing(2)};
`;

const RecipeContentText = styled(Typography)`
  font-size: 16px;
  line-height: 24px;
`;

export { Container, Content, Button, RecipeDifficultyText, RecipeContentText };
