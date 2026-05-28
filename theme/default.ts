export const primaryColor = "#5646e3";
import { createTheme } from '@mui/material/styles';

export const defaultTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
        main: "#5646e3"
    },
    background: {
        default: "#2f2f2f",
        paper: "#2f2f2f"
    }
  },
  cssVariables: true,
  defaultColorScheme: 'dark',
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          color: '#c0c0c0'
        }
      }
    }
  }
});