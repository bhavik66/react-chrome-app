import { SxProps } from '@mui/material';
import COLORS from '../../theme/colors';

const styledForTextField: SxProps = {
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.bermudaGray, // Change the border color here
    },
    '&:hover fieldset': {
      borderColor: COLORS.bermudaGray, // Change the border color on hover here
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.tuna, // Change the border color when focused here
    },
  },
  '& svg': {
    color: 'white',
  },
};

export { styledForTextField };
