import { FC, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
  Divider,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { Progress } from './Progress';
import { useFetchCharacterDetails } from '../hooks';

import {
  useLazyFetchCharacterDetailsQuery,
  useFetchCharacterDetailsQuery,
} from '../store';
import { CharacterDetail } from '../types';

interface CharacterDetailsProp {
  dialog: boolean;
  handleCloseDialog: () => void;
  id: number;
}

export const CharacterDetails: FC<CharacterDetailsProp> = ({
  dialog,
  handleCloseDialog,
  id,
}) => {
  const { character, error, isFetching } = useFetchCharacterDetails(
    id,
    !dialog
  );
  // const gridBio = (items: { [key: string]: string | number }) => {};

  const gridItems = (items: { [key: string]: string | number }) => {
    return Object.entries(items).map(([key, value]) => (
      <Grid item lg={4} md={4} sm={12} xs={12} key={key}>
        <Typography
          // align="center"
          sx={{ paddingX: 2 }}
          variant="h6"
          color={(theme) => theme.palette.text.secondary}
        >
          {key.charAt(0).toUpperCase() + key.slice(1)}: <strong>{value}</strong>
        </Typography>
      </Grid>
    ));
  };

  const episodeGrid = (items: { [key: string]: string | number }) => {
    return (
      <Grid
        item
        lg={4}
        md={6}
        sm={12}
        xs={12}
        sx={{ boxShadow: 2, paddingY: 2.5, margin: 1 }}
        key={items.name}
      >
        {Object.entries(items).map(([key, value]) => (
          <Typography
            key={key}
            // align="center"
            sx={{ paddingX: 2 }}
            variant="h6"
            color={(theme) => theme.palette.text.secondary}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
            <strong>{value}</strong>
          </Typography>
        ))}
      </Grid>
    );
  };

  if (error)
    return (
      <>
        <Dialog
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          open={dialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="md"
          sx={{ maxHeight: '80vh', marginTop: '10vh' }}
        >
          <DialogTitle color="error" id="dialog-title">
            💥💥 ERROR 💥💥
          </DialogTitle>
          <DialogContent
            sx={{ bgcolor: (theme) => theme.palette.secondary.light }}
          >
            <DialogContentText>Something Went Really Wrong</DialogContentText>
          </DialogContent>

          <DialogActions
            sx={{ bgcolor: (theme) => theme.palette.secondary.main }}
          >
            <Button size="small" color="inherit" onClick={handleCloseDialog}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );

  if (isFetching)
    return (
      <>
        <Dialog
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          open={dialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="md"
          sx={{
            maxHeight: '80vh',
            marginTop: '10vh',
          }}
        >
          <DialogTitle
            id="dialog-title"
            sx={{ bgcolor: (theme) => theme.palette.secondary.main }}
          >
            Loading...
          </DialogTitle>
          <DialogContent
            sx={{ bgcolor: (theme) => theme.palette.secondary.light }}
          >
            <Progress />
          </DialogContent>
        </Dialog>
      </>
    );

  return (
    <>
      {character && !error && !isFetching && (
        <Dialog
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          open={dialog}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="md"
          sx={
            {
              // maxHeight: '80vh',
              // marginTop: '10vh',
            }
          }
        >
          <DialogTitle
            id="dialog-title"
            sx={{
              bgcolor: (theme) => theme.palette.secondary.main,
              fontSize: 24,
            }}
          >
            {character.name}
          </DialogTitle>
          <Divider />
          <DialogContent
            sx={{ bgcolor: (theme) => theme.palette.secondary.light }}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              alignContent="center"
              justifyItems="center"
              rowSpacing={2}
              columnSpacing={3}
              sx={{ minHeight: '20vh', padding: 4 }}
            >
              <Grid
                item
                component="img"
                sx={{
                  height: 400,
                  width: 400,
                  maxHeight: { xs: 300, md: 350 },
                  maxWidth: { xs: 300, md: 350 },
                  borderRadius: 5,
                  paddingX: 3,
                  paddingY: 2,
                  boxShadow: 4,
                }}
                alt={character.name}
                src={character.image}
              />
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ paddingX: 2 }}
                  color={(theme) => theme.palette.text.secondary}
                >
                  Name: <strong>{character.name}</strong>
                </Typography>

                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ paddingX: 2 }}
                  color={(theme) => theme.palette.text.secondary}
                >
                  Species: <strong>{character.species}</strong>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  sx={{ paddingX: 2 }}
                  color={(theme) => theme.palette.text.secondary}
                >
                  Gender: <strong>{character.gender}</strong>
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ paddingX: 2 }}
                  variant="h6"
                  color={(theme) => theme.palette.text.secondary}
                >
                  Type:{' '}
                  <strong>{character.type ? character.type : 'unknown'}</strong>
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ paddingX: 2 }}
                  variant="h6"
                  color={(theme) => theme.palette.text.secondary}
                >
                  Status: <strong>{character.status}</strong>
                </Typography>
                <Typography
                  gutterBottom
                  sx={{ paddingX: 2 }}
                  variant="h6"
                  color={(theme) => theme.palette.text.secondary}
                >
                  Created:{' '}
                  <strong>
                    {new Date(character.created).toLocaleString()}
                  </strong>
                </Typography>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Divider />
                <Typography padding={2} variant="h5" align="center">
                  Origin
                </Typography>
              </Grid>
              {gridItems(character.origin)}
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Divider />
                <Typography padding={2} variant="h5" align="center">
                  Location
                </Typography>
              </Grid>
              {gridItems(character.location)}
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Divider />
                <Typography padding={2} variant="h5" align="center">
                  Episodes
                </Typography>
              </Grid>
              <Grid
                container
                alignContent="center"
                justifyContent="center"
                // alignItems="center"
                // justifyItems="center"
                // rowSpacing={2}
                // columnSpacing={3}
                // sx={{ minHeight: '20vh', padding: 4 }}
              >
                {character.episode.map((ep) => episodeGrid(ep))}
              </Grid>
            </Grid>
          </DialogContent>
          <Divider />
          <DialogActions
            sx={{ bgcolor: (theme) => theme.palette.secondary.main }}
          >
            <Button
              fullWidth
              size="large"
              variant="outlined"
              color="success"
              onClick={handleCloseDialog}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
