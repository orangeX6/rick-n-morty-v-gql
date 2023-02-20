import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme } from '../store/slices/theme';
import { setupStore } from '../store';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const store = setupStore();

    const { getByText } = render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </Provider>
    );

    expect(getByText(/Rick/i)).toBeInTheDocument();
  });
});
