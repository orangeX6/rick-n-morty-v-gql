import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { RootState } from './store';
import { darkTheme, lightTheme } from './store/slices/theme';
import { Layout } from './components/Layout';
import { CssBaseline } from '@mui/material';
import './App.css';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  // const [displayScroll, setDisplayScroll] = useState<boolean>(false);
  // const ref = useRef<HTMLDivElement>(null);
  const theme = useSelector((state: RootState) => state.theme);

  // const handleScroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 1400) {
  //     if (!displayScroll) setDisplayScroll(true);
  //   }
  //   if (window.scrollY < 1400) {
  //     // console.log(displayScroll);
  //     if (displayScroll) setDisplayScroll(false);
  //   }
  // };

  // useEffect(() => {
  // setInterval(
  //   () =>
  //     console.log(
  //       ref,
  //       displayScroll,
  //       (ref.current! as HTMLDivElement).scrollTop
  //     ),
  //   3000
  // );
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
