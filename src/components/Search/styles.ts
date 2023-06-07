import { SxProps } from '@mui/material';
import COLORS from '../../theme/colors';

const styledForTextField: SxProps = {
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 2,
  borderColor: COLORS.bermudaGray,
  backgroundColor: COLORS.mirage,
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
};

export { styledForTextField };
