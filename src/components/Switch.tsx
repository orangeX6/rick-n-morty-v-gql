import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import { RootState } from '../store';
import { toggleTheme } from '../store/slices/themeSlice';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ToggleSwitch = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={() => dispatch(toggleTheme())}
      color="inherit"
      size="large"
      aria-label="theme"
    >
      {theme.darkTheme === true ? (
        <Brightness7Icon
          style={{ color: '#ffffff' }}
          sx={{ fontSize: '120%' }}
        />
      ) : (
        <Brightness4Icon
          style={{ color: '#416e23' }}
          sx={{ fontSize: '120%' }}
        />
      )}
    </IconButton>
  );
};
