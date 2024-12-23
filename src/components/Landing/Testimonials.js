import React from 'react';

import { Box, Card, Container, Stack, Typography } from '@mui/material';

export const Testimonials = () => {
  const TestimonialCard = ({ name, handle, text, image }) => {
    return (
      <Card sx={{ borderRadius: 2 }}>
        <Box
          sx={{
            width: 1,
            background:
              'linear-gradient(180deg, hsl(213deg 46% 34% / 20%), hsl(214deg 41% 51% / 5%))',
          }}
        >
          <img
            src={`assets/images/${image}.png`}
            alt={image}
            style={{ width: '100%' }}
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography
              color="primary"
              fontWeight={400}
              fontSize={[18, 20]}
              mr={1}
            >
              {name}
            </Typography>

            <Typography
              color="primary"
              fontWeight={400}
              fontSize={[14, 16]}
              sx={{ opacity: 0.5 }}
            >
              {handle}
            </Typography>
          </Box>
          <Typography color="primary" variant="body2" fontSize={16}>
            {text}
          </Typography>
        </Box>
      </Card>
    );
  };

  return (
    <Container
      sx={{
        width: 1,
        py: '5vh',
      }}
    >
      <Typography
        color="primary"
        align="center"
        fontSize={[20, 28]}
        fontWeight={600}
        sx={{ mb: [0, 1] }}
        letterSpacing={1.2}
      >
        Get to know some of our success stories
      </Typography>
      <Typography
        color="primary"
        align="center"
        fontSize={[16, 24]}
        sx={{ opacity: 0.5, mb: 4 }}
      >
        You can be the next
      </Typography>
      <Stack direction={['column', 'row']} gap={4} sx={{ mt: 6 }}>
        <Box sx={{ width: [1, 1 / 3], p: [0, 2], mt: [0, 4] }}>
          <TestimonialCard
            name="Sophia L."
            handle="@sophi001"
            text="This app has been a game-changer for me! I lost 9 kg and feel healthier and more energetic. The personalized meal plans and workouts fit perfectly into my routine. I've gained confidence and learned how to maintain a balanced, sustainable lifestyle."
            image="testimonials2"
          />
        </Box>
        <Box sx={{ width: [1, 1 / 3], p: [0, 2] }}>
          <TestimonialCard
            name="Emily R."
            handle="@efitness097"
            text="MetaFit helped me lose 6 kg and build a healthy lifestyle! The personalized plans were easy to follow, and now I feel stronger, more energetic, and confident. I've learned so much about balancing my meals and staying consistent with workouts."
            image="testimonials1"
          />
        </Box>
        <Box sx={{ width: [1, 1 / 3], p: [0, 2], mt: [0, 4] }}>
          <TestimonialCard
            name="Alex M."
            handle="@alex_fitness097"
            text="I lost 15 kg of fat, gained muscle, and feel stronger than ever. Beyond the physical changes, I've gained confidence and a healthier mindset. If you're serious about changing your life, this app is the best tool to get you there!"
            image="testimonials3"
          />
        </Box>
      </Stack>
    </Container>
  );
};
