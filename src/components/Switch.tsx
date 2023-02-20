import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useAppSelector, useAppDispatch } from '../hooks';
import { RootState, toggleTheme } from '../store';

export const ToggleSwitch = () => {
  const theme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();

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
