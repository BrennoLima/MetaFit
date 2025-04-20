import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EggIcon from '@mui/icons-material/Egg';

const GoalInformation = ({ userInfo, updateUserInfo }) => {
  return (
    <Container
      maxWidth="sm"
      sx={{ px: '0 !important', height: 1, alignItems: 'center' }}
    >
      <Stack sx={{ gap: 3, mt: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<MonitorWeightIcon />}
          sx={{
            textAlign: 'left',
            justifyContent: 'flex-start',
            border:
              userInfo.goal === 'fat-loss'
                ? '1px solid #FFF'
                : '1px solid #2D507C',
            backgroundColor: '#2D507C',
            py: 1,
            '& .MuiSvgIcon-root': {
              fontSize: '60px !important',
            },
          }}
          onClick={() => updateUserInfo('goal', 'fat-loss')}
        >
          <Box>
            <Typography fontWeight="semi-bold" variant="h6">
              Fat Loss
            </Typography>
            <Typography variant="body2">
              Lose weight and boost well-being
            </Typography>
          </Box>
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<FitnessCenterIcon />}
          sx={{
            textAlign: 'left',
            justifyContent: 'flex-start',
            border:
              userInfo.goal === 'muscle-growth'
                ? '1px solid #FFF'
                : '1px solid #2D507C',
            backgroundColor: '#2D507C',
            py: 1,
            '& .MuiSvgIcon-root': {
              fontSize: '60px !important',
            },
          }}
          onClick={() => updateUserInfo('goal', 'muscle-growth')}
        >
          <Box>
            <Typography fontWeight="semi-bold" variant="h6">
              Muscle Growth
            </Typography>
            <Typography variant="body2">
              Build muscle and increase strength
            </Typography>
          </Box>
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<EggIcon />}
          sx={{
            textAlign: 'left',
            justifyContent: 'flex-start',
            border:
              userInfo.goal === 'healthy-eating'
                ? '1px solid #FFF'
                : '1px solid #2D507C',
            backgroundColor: '#2D507C',
            py: 1,
            '& .MuiSvgIcon-root': {
              fontSize: '60px !important',
            },
          }}
          onClick={() => updateUserInfo('goal', 'healthy-eating')}
        >
          <Box>
            <Typography fontWeight="semi-bold" variant="h6">
              Healthy Eating
            </Typography>
            <Typography variant="body2">
              Bost energy and improve eating habits
            </Typography>
          </Box>
        </Button>
      </Stack>
    </Container>
  );
};

export default GoalInformation;
