import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box
      display={'flex'}
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
