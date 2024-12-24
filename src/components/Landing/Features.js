import React from 'react';

import { Box, Container, Stack, Typography } from '@mui/material';
import useIsMobileScreen from '../../utils/useIsMobileScreen';

export const Features = () => {
  const isMobile = useIsMobileScreen();
  return (
    <Box
      sx={{
        width: 1,
        background: 'linear-gradient(180deg, #2E517D, #4E7BB5)',
        py: 10,
      }}
    >
      <Container>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          gap={[4, 8]}
        >
          <Box sx={{ width: [1 / 2, 1 / 5] }}>
            <img
              src="assets/SVGs/feature1.svg"
              alt="feature1"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ pr: 4, pl: isMobile && 4, width: [1, 3 / 5] }}>
            <Typography
              fontSize={[20, 24]}
              fontWeight={500}
              sx={{ color: '#FFF' }}
            >
              Calories and Macros Tracking
            </Typography>
            <Typography
              fontSize={[16, 18]}
              sx={{ color: '#FFF', opacity: 0.8 }}
            >
              Easily track your daily calorie and macronutrient intake with our
              user-friendly tools. Weekly summaries help you monitor progress,
              identify trends, and stay aligned with your fitness goals.
            </Typography>
          </Box>
          <Box sx={{ width: 1 / 5 }} />
        </Stack>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          gap={[4, 8]}
          sx={{ flexDirection: isMobile && 'column-reverse' }}
        >
          <Box sx={{ width: 1 / 5 }} />
          <Box sx={{ pr: 4, pl: isMobile && 4, width: [1, 3 / 5] }}>
            <Typography
              fontSize={[20, 24]}
              fontWeight={500}
              sx={{ color: '#FFF' }}
            >
              Tailored Nutritional Plan
            </Typography>
            <Typography
              fontSize={[16, 18]}
              sx={{ color: '#FFF', opacity: 0.8 }}
            >
              Enjoy a personalized daily nutrition plan crafted by AI to fit
              your unique profile and goals. Whether you’re building muscle,
              losing weight, or maintaining health, your plan adapts to support
              your journey.
            </Typography>
          </Box>
          <Box sx={{ width: [1 / 2, 1 / 5] }}>
            <img
              src="assets/SVGs/feature2.svg"
              alt="feature2"
              style={{ width: '100%' }}
            />
          </Box>
        </Stack>
        <Stack
          direction={isMobile ? 'column' : 'row'}
          alignItems="center"
          gap={[4, 8]}
        >
          <Box sx={{ width: [1 / 2, 1 / 5] }}>
            <img
              src="assets/SVGs/feature3.svg"
              alt="feature3"
              style={{ width: '100%' }}
            />
          </Box>
          <Box sx={{ pr: 4, pl: isMobile && 4, width: [1, 3 / 5] }}>
            <Typography
              fontSize={[20, 24]}
              fontWeight={500}
              sx={{ color: '#FFF' }}
            >
              Personalized Workout Progression
            </Typography>
            <Typography
              fontSize={[16, 18]}
              sx={{ color: '#FFF', opacity: 0.8 }}
            >
              Level up with workouts tailored to your fitness level and goals.
              The AI adjusts your routines as you progress, ensuring every
              session is challenging and effective for steady growth.
            </Typography>
          </Box>
          <Box sx={{ width: 1 / 5 }} />
        </Stack>
      </Container>
    </Box>
  );
};
