import React, { useState } from 'react';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import {
  Grid2 as Grid,
  Box,
  Card,
  Chip,
  Container,
  Typography,
  Stack,
  Divider,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import DietCard from './DietCard';
import WeeklySummaryCard from './WeeklySummaryCard';

const HomePage = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generatePlan = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDietPlans(prev => [...prev, { name: 'Plan 1' }]);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 2, mt: '5%' }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack gap={4}>
            <Stack gap={4}>
              <Card
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid #DDD',
                  p: 2,
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <RestaurantOutlinedIcon color="primary" />
                  <Typography color="primary" fontSize={24}>
                    Diet Plans
                  </Typography>
                </Box>

                <Chip
                  variant="outlined"
                  color="primary"
                  label={dietPlans.length + '/2 plans'}
                  sx={{ px: 1, py: 0.5, height: 'unset' }}
                />
              </Card>

              {dietPlans.length === 0 && (
                <Typography color="text.secondary">
                  Begin your journey to a healthier you! Create your first
                  personalized diet plan tailored to your current profile.
                </Typography>
              )}
              {dietPlans.map(dietPlan => (
                <DietCard />
              ))}
              <LoadingButton
                disabled={dietPlans.length === 2}
                color="secondary"
                loading={isLoading}
                startIcon={<AutorenewOutlinedIcon />}
                onClick={() => generatePlan()}
                variant="contained"
                size="small"
              >
                Generate Diet Plan
              </LoadingButton>
            </Stack>
            <Divider />
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                border: '1px solid #DDD',
                p: 2,
              }}
              elevation={0}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <FitnessCenterOutlinedIcon color="primary" />
                <Typography color="primary" fontSize={24}>
                  Workout Plans
                </Typography>
              </Box>
              <Chip
                variant="contained"
                label="Comming Soon"
                sx={{ px: 1, py: 0.5, height: 'unset' }}
              />
            </Card>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <WeeklySummaryCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
