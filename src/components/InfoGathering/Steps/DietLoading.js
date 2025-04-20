import React from 'react';
import { Container, CircularProgress, Stack } from '@mui/material';

const DietLoading = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ px: '0 !important', flex: 1, width: '100%' }}
    >
      <Stack sx={{ height: 1 }}>
        <CircularProgress />
      </Stack>
    </Container>
  );
};

export default DietLoading;
