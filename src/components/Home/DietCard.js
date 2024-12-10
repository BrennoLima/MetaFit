import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Link } from 'react-router-dom';

import { CARBS_COLOR, FATS_COLOR, PROTEINS_COLOR } from '../../utils/constants';

const DietCard = () => {
  return (
    <Card
      sx={{ p: 2, textDecoration: 'none' }}
      component={Link}
      to="/my-timeline"
    >
      <Box
        gap={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pb: 0.5,
        }}
      >
        <Typography fontSize={20}>Muscle Gain Plan</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="400"
          lineHeight={1}
        >
          •
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="400"
          lineHeight={1}
        >
          2500 Cal
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1 }}>
        <CalendarTodayOutlinedIcon color="text.secondary" fontSize="small" />
        <Typography color="text.secondary" variant="body2">
          Created on November 23, 2024
        </Typography>
      </Box>

      <Box
        gap={2}
        sx={{
          display: 'flex',
          pt: 2,
          gap: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              background: CARBS_COLOR,
              borderRadius: '50%',
              width: '12px',
              height: '12px',
            }}
          />
          <Typography color="text.secondary">
            <b>250g</b> Carbs
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              background: PROTEINS_COLOR,
              borderRadius: '50%',
              width: '12px',
              height: '12px',
            }}
          />
          <Typography color="text.secondary">
            <b>180g</b> Proteins
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              background: FATS_COLOR,
              borderRadius: '50%',
              width: '12px',
              height: '12px',
            }}
          />
          <Typography color="text.secondary">
            <b>80g</b> Fats
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default DietCard;
