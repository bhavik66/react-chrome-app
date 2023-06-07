import { createTheme as createMuiTheme } from '@mui/material';
import COLORS from './colors';

export function createTheme() {
  return createMuiTheme({
    palette: {
      primary: {
        main: COLORS.cloudBurst,
        contrastText: COLORS.white,
      },
      secondary: {
        main: COLORS.java,
        contrastText: COLORS.bunker,
      },
      text: {
        primary: COLORS.bermudaGray,
        secondary: COLORS.bunker,
      },
      background: {
        default: COLORS.bunker,
        paper: COLORS.mirage,
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover:not($disabled):not($focused):not($error) $notchedOutline':
              {
                borderColor: 'rgba(0, 0, 0, 0.23)', // Set the desired border color on hover
              },
          },
          input: {
            '&$disabled': {
              '&::placeholder': {
                opacity: 0.5, // Customize the placeholder opacity for disabled state if needed
              },
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          option: {
            '&[aria-selected="true"]': {
              backgroundColor: COLORS.tuna,
            },
            '&[aria-selected="true"].Mui-focused': {
              backgroundColor: COLORS.tuna,
            },
            '&.Mui-selected': {
              backgroundColor: COLORS.tuna,
            },
            '&.Mui-focused': {
              backgroundColor: COLORS.cloudBurst,
            },
          },
        },
      },
    },
  });
}
