import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from './theme';
import { Main } from './views';
import { worker } from './mocks/browser';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

worker.start();

// Create a client
const queryClient = new QueryClient();

const theme = createTheme();

const App = (): React.ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
