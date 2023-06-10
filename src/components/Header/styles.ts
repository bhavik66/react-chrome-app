import {
  Box,
  IconButton as MuiIconButton,
  Typography,
  styled,
} from '@mui/material';

const Container = styled(Box)`
  margin-top: ${(props) => props.theme.spacing(3)};
  margin-bottom: ${(props) => props.theme.spacing(3)};
`;

const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  flex-wrap: wrap;
  flex-shrink: 1;
  display: flex;
`;

const IconButton = styled(MuiIconButton)`
  padding: 0px;
`;

export { Container, Title, IconButton };
