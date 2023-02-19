import { useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import { RootState } from './store';
import { darkTheme, lightTheme } from './store/slices/theme';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  const theme = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <div className="App">
        <CssBaseline />
        <Layout />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
