import React from 'react';
import {
  Box,
  Card,
  Chip,
  Typography,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklySummaryCard = () => {
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

  return (
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
        <Typography color="primary" fontSize={20} fontWeight="medium">
          Weekly Summary
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
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
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Typography color="text.secondary">Dec 9th - Dec 15th</Typography>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>

      <Bar options={options} data={data} />

      <Stack
        sx={{ background: '#00000010', p: 1, borderRadius: 1, gap: 1, mt: 2 }}
      >
        <Typography variant="body2">
          Logged days:{' '}
          <mark style={{ background: 'none', fontWeight: 400 }}>5</mark>
        </Typography>
        <Typography variant="body2">
          Missed days:{' '}
          <mark style={{ background: 'none', fontWeight: 400 }}>
            Wednessday, Saturday
          </mark>
        </Typography>
        <Typography variant="body2">
          Objective completed:{' '}
          <mark style={{ background: 'none', fontWeight: 400 }}>3/5 logs</mark>
        </Typography>
      </Stack>
    </Card>
  );
};

export default WeeklySummaryCard;
