import { AppBar, Box, Toolbar, Stack, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import { ToggleSwitch } from './Switch';

export const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Box sx={{ flex: 1 }}>
          <img src={logo} alt="logo" width="30%" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4">Rick And Morty</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <ToggleSwitch />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
