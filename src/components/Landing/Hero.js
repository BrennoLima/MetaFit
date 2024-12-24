import React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useIsMobileScreen from '../../utils/useIsMobileScreen';

export const Hero = () => {
  const isMobile = useIsMobileScreen();
  return (
    <Container
      sx={{
        width: 1,
        display: !isMobile && 'flex',
        alignItems: 'center',
        py: '5vh',
      }}
    >
      <Box sx={{ width: 1, pr: 4 }}>
        <Typography
          color="primary"
          fontSize={[24, 32]}
          fontWeight={500}
          sx={{ opacity: 0.25 }}
        >
          YOUR AI
        </Typography>
        <Typography
          color="primary"
          fontSize={[24, 32]}
          fontWeight={600}
          letterSpacing={4}
          sx={{ mb: 4 }}
        >
          Trainer, Meal Planner, and Calorie Tracker
        </Typography>
        <Typography
          color="primary"
          fontSize={[20, 24]}
          sx={{ opacity: 0.75, mb: 4 }}
        >
          Generate personalized meal plans and workouts based on your own
          profile and goals.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="secondary"
          size="large"
        >
          Start your journey!
        </Button>
      </Box>
      <Box sx={{ width: 1, mt: isMobile && 4 }}>
        <img
          src="assets/images/PhonesMockup.png"
          alt="phones-mockup"
          style={{ width: '100%' }}
        />
      </Box>
    </Container>
  );
};
