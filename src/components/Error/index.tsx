import { Alert, Box } from '@mui/material';

const Error = () => {
  return (
    <Box
      display={'flex'}
      flex={1}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Alert variant="filled" severity="error">
        Something went wrong
      </Alert>
    </Box>
  );
};

export default Error;
