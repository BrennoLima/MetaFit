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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CARBS_COLOR, PROTEINS_COLOR, FATS_COLOR } from '../../utils/constants';
import { LoadingButton } from '@mui/lab';
import DietCard from './DietCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HomePage = () => {
  const [dietPlans, setDietPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const labels = [
    'Monday',
    'Tuesday',
    'Wednessday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Carbs',
        data: [250, 220, null, 250, 270, null, 180],
        backgroundColor: CARBS_COLOR + '80',
      },
      {
        label: 'Proteins',
        data: [180, 180, null, 170, 150, null, 180],
        backgroundColor: PROTEINS_COLOR + '80',
      },
      {
        label: 'Fats',
        data: [90, 100, null, 100, 115, null, 80],
        backgroundColor: FATS_COLOR + '80',
      },
    ],
  };

  const generatePlan = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDietPlans([{ name: 'Plan 1' }]);
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
                  variant="contained"
                  color="secondary"
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
          <Card
            sx={{
              p: 2,
              border: '1px solid #DDD',
              borderRadius: 2,
              position: 'relative',
              color: '#000000e6',
            }}
            elevation={0}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography color="primary" fontSize={20}>
                Weekly Summary
              </Typography>
              <Chip
                color="secondary"
                label="5/7 logs"
                sx={{ px: 1, py: 0.5, height: 'unset' }}
              />
            </Box>

            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2,
              }}
            >
              <Typography>Dec 9th to Dec 15th</Typography>
            </Box>

            <Bar options={options} data={data} />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
