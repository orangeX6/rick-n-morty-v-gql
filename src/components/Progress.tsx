import { Stack, CircularProgress, Box } from '@mui/material';

export const Progress = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      p={5}
      sx={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <CircularProgress size={96} color="secondary" />
    </Stack>
  );
};
