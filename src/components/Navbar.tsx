import {
  AppBar,
  Box,
  Toolbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { ToggleSwitch } from './Switch';
import logo from '../assets/logo.png';
import logoMobile from '../assets/logoMobile.png';

export const Navbar = () => {
  const isTablet = useMediaQuery('(max-width:900px)');
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Box sx={{ flex: 1 }}>
          {isTablet ? (
            <img src={logoMobile} alt="logo" width="25%" />
          ) : (
            <img src={logo} alt="logo" width="30%" />
          )}
        </Box>
        {!isMobile && (
          <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h4" align="center">
              Rick And Morty
            </Typography>
          </Box>
        )}
        <Stack
          sx={{ flex: 1 }}
          direction="row"
          spacing={2}
          justifyContent="right"
        >
          <ToggleSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
