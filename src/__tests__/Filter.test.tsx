import { getByRole, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import user from '@testing-library/user-event';
import { Filter } from '../components/Filter';
import { setupStore, filterReducer } from '../store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { lightTheme } from '../store/slices/theme';

describe('filter reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = filterReducer(initialState, action);
    expect(result).toEqual({
      name: '',
      species: '',
      status: '',
      gender: '',
    });
  });

  it('it shows an input and 4 buttons', () => {
    // render the component
    const store = setupStore();
    render(
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Filter />
        </ThemeProvider>
      </Provider>
    );

    // Manipulate the component or find an element in it
    const input = screen.getByRole('textbox');
    const buttons = screen.getAllByRole('button');

    //Assertion - Make sure the component is doing
    // what we expect it to do
    expect(input).toBeInTheDocument();
    // expect(buttons).toBeInTheDocument();
    expect(buttons).toHaveLength(4);
  });
});

// import UserEvent from '@testing-library/user-event';
test('select a specie', async () => {
  const store = setupStore();
  render(
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Filter />
      </ThemeProvider>
    </Provider>
  );
  // screen.logTestingPlaygroundURL();

  user.click(getByRole(screen.getByTestId('species'), 'button'));
  await waitFor(() => user.click(screen.getByText(/Humanoid/i)));
  expect(screen.getByTestId('species')).toHaveTextContent(/Humanoid/i);
});
