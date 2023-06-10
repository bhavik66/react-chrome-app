import { Box, styled } from '@mui/material';

const Container = styled(Box)`
  padding: ${(props) => props.theme.spacing(3)};
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: scroll;
`;

export { Container };
