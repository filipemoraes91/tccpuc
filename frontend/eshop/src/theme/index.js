import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3e3e3e',
      contrastText: '#f0f0f0',
    },
    secondary: {
      main: green[500],
    },

  },
});