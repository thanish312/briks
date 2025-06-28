import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#fff',
      paper: mode === 'dark' ? '#1e1e1e' : '#fff',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const getTheme = (mode = 'light') => createTheme(getDesignTokens(mode));
