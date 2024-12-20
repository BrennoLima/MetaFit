import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  LinearProgress,
  Typography,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EggIcon from '@mui/icons-material/Egg';

import useIsMobileScreen from '../../../utils/useIsMobileScreen';

const GoalInformation = ({ userInfo, updateUserInfo, nextStep, prevStep }) => {
  const isMobile = useIsMobileScreen();

  return (
    <Card
      sx={{
        color: 'white',
        backgroundImage:
          "url('assets/SVGs/DailySummaryBgBlob.svg'), linear-gradient(180deg, #2D507C, #4F7DB7)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150%',
        backgroundPosition: 'top',
        height: isMobile ? '100%' : '700px',
        width: 1,
        boxSizing: 'border-box',
        p: 4,
      }}
    >
      <Stack sx={{ height: 1 }}>
        <Box
          sx={{ width: 1, display: 'flex', justifyContent: 'center', pb: 4 }}
        >
          <Box sx={{ width: isMobile ? '75%' : '50%', color: '#1a3456' }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(100 / 6) * 1}
              sx={{
                '&.MuiLinearProgress-root': {
                  height: 5,
                  borderRadius: 2,
                  '::before': {
                    background: '#DDD',
                    opacity: 0.5,
                  },
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: isMobile ? 'center' : 'stretch',
            gap: 4,
            mb: 2,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <Box sx={{ width: '150px', flexShrink: 0 }}>
            <img
              src="assets/SVGs/Coach.svg"
              alt="coach"
              style={{ width: '100%' }}
            />
          </Box>
          <Box>
            <Typography fontWeight="bold" fontSize={[20, 24]}>
              What is your primary fitness goal?
            </Typography>
            <Typography sx={{ mt: 1 }} fontSize={[14, 16]}>
              Based on your fitness goals, we will determine your ideal diet
              plan. A calorie deficit is recommended for fat loss, a calorie
              surplus for muscle gain, and calorie maintenance for improving
              overall health habits.
            </Typography>
          </Box>
        </Box>
        <Container maxWidth="sm" sx={{ px: '0 !important', flex: 1, pb: 4 }}>
          <Stack sx={{ height: 1, justifyContent: 'space-around', gap: 2 }}>
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
        <Container maxWidth="sm" sx={{ px: '0 !important' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              py: 2,
            }}
          >
            <Button
              onClick={prevStep}
              sx={{ color: '#FFF', px: 4 }}
              startIcon={<KeyboardArrowLeftIcon />}
            >
              Back
            </Button>
            <Button
              disabled={userInfo.goal === null}
              variant="contained"
              color="secondary"
              sx={{ px: 4 }}
              endIcon={<KeyboardArrowRightIcon />}
              onClick={nextStep}
            >
              Next
            </Button>
          </Box>
          <Typography variant="body2">
            * You can update all this information in your profile at any time
          </Typography>
        </Container>
      </Stack>
    </Card>
  );
};

export default GoalInformation;
