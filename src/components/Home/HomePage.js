import React from 'react';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import {
  Grid2 as Grid,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Typography,
  Stack,
} from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ p: 2, mt: '5%' }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 2,
              background: 'linear-gradient(180deg, #4f7db7, #2d507c)',
              color: '#f7f7f7',
            }}
          >
            <Stack gap={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography variant="h4">Diet Plans</Typography>
                <Chip color="secondary" label="0/1 plans" variant="outlined" />
              </Box>
              <Typography>
                Begin your journey to a healthier you! Create your first
                personalized diet plan tailored to your current profile.
              </Typography>
              <Button color="secondary" variant="contained">
                Create Diet Plan
              </Button>
            </Stack>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 2,
              border: '1px solid #DDD',
              borderRadius: 2,
            }}
            elevation={0}
          >
            <Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}
              >
                <TrackChangesOutlinedIcon fontSize="large" />
                <Typography variant="h5">Current Goal</Typography>
              </Box>
              <Typography sx={{ ml: '45px' }}>Muscle Gain</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              p: 2,
              background: 'linear-gradient(180deg, #4f7db7, #2d507c)',
              color: '#f7f7f7',
            }}
          >
            <Stack gap={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Typography variant="h5">Workout Plans</Typography>
                <Chip
                  color="secondary"
                  disabled
                  label="Comming soon"
                  variant="outlined"
                />
              </Box>

              <Button disabled color="secondary" variant="contained">
                Create Diet Plan
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
