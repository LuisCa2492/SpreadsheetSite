// theme.js
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2', // color principal
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default Theme;
