import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',

    background: {
      paper: '#e6fbda',
      default: '#f9f2e5',
    },
    primary: {
      main: '#3ea644',
      light: '#e6fbda',
      dark: '#04661d',
    },
    secondary: {
      light: '#f9f2e5',
      main: '#81f35c',
    },
    text: {
      primary: '#11111',
      secondary: '#434343',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#81f35c',
          color: '#666',
        },
      },
    },
    // MuiCard: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: '#ccf1ce',
    //       color: '#666',
    //     },
    //   },
    // },
    // MuiTextField: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: '#ccf1ce',
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       color: 'white',
    //       '&::before': {
    //         borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // use your color
    //       },
    //     },
    //   },
    // },
  },
  spacing: 8,
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(92, 169, 82, 0.85),0px 1px 1px 0px rgba(92, 169, 82, 0.85),0px 1px 3px 0px rgba(92, 169, 82, 0.85)',
    '0px 3px 1px -2px rgba(92, 169, 82, 0.85),0px 2px 2px 0px rgba(92, 169, 82, 0.85),0px 1px 5px 0px rgba(92, 169, 82, 0.85)',
    '0px 3px 3px -2px rgba(62, 166, 68, 0.9),0px 3px 4px 0px rgba(42, 115, 47, 0.85),0px 1px 8px 0px rgba(23, 64, 26, 0.8)',
    '0px 2px 4px -1px rgba(92, 169, 82, 0.85),0px 4px 5px 0px rgba(92, 169, 82, 0.85),0px 1px 10px 0px rgba(92, 169, 82, 0.85)',
    '0px 2px 5px rgba(92, 169, 82, 0.85)',
    '0px 10px 20px rgba(92, 169, 82, 0.85)',
    '1.6px 7px 7px -4px rgba(62, 166, 68, 0.9),1px 11px 14px 3px rgba(42, 115, 47, 0.85),2px 5px 20px 5px rgba(23, 64, 26, 0.8)',
    '0px 5px 5px -3px rgba(92, 169, 82, 0.85),0px 8px 10px 1px rgba(92, 169, 82, 0.85),0px 3px 14px 2px rgba(92, 169, 82, 0.85)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#223d38',
      default: '#1c2733',
      // default: '#000',
    },
    primary: { main: '#244d2e', light: '#244d2e' },
    text: {
      primary: '#f8f2e6',
    },
    secondary: {
      light: '#3d3d3d',
      main: '#3cb10f',
    },
    success: {
      main: '#9dff9e',
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#288100',
        },
      },
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     input: {
    //       backgroundColor: '#244d2e',
    //     },
    //   },
    // },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // filter: `brightness(0.8) contrast(1.2)`,
        },
      },
    },
  },

  spacing: 8,
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(92, 169, 82, 0.85),0px 1px 1px 0px rgba(92, 169, 82, 0.85),0px 1px 3px 0px rgba(92, 169, 82, 0.85)',
    '0px 3px 1px -2px rgba(92, 169, 82, 0.85),0px 2px 2px 0px rgba(92, 169, 82, 0.85),0px 1px 5px 0px rgba(92, 169, 82, 0.85)',
    '0px 3px 3px -2px rgba(92, 169, 82, 0.85),0px 3px 4px 0px rgba(92, 169, 82, 0.85),0px 1px 8px 0px rgba(92, 169, 82, 0.85)',
    '0px 2px 4px -1px rgba(92, 169, 82, 0.85),0px 4px 5px 0px rgba(92, 169, 82, 0.85),0px 1px 10px 0px rgba(92, 169, 82, 0.85)',
    '0px 2px 5px rgba(92, 169, 82, 0.85)',
    '0px 10px 20px rgba(92, 169, 82, 0.85)',
    '1.6px 7px 7px -4px rgba(195, 252, 91, 0.9),1px 11px 14px 3px rgba(112, 171, 87, 0.85),2px 5px 20px 5px rgba(81, 149, 49, 0.8)',
    '0px 5px 5px -3px rgba(92, 169, 82, 0.85),0px 8px 10px 1px rgba(92, 169, 82, 0.85),0px 3px 14px 2px rgba(92, 169, 82, 0.85)',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});
