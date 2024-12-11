import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E517D',
    },
    secondary: {
      main: '#fbaf1d',
    },
  },
  typography: {
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    button: {
      textTransform: 'none',
    },
  },
});
