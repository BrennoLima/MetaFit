import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Stack,
  Slider,
  LinearProgress,
  Typography,
  ButtonGroup,
} from '@mui/material';
import dayjs from 'dayjs';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PersonalInformation = ({
  userInfo,
  updateUserInfo,
  nextStep,
  prevStep,
}) => {
  const [isInvalidDate, setIsInvalidDate] = useState(false);

  return (
    <Card
      sx={{
        color: 'white',
        backgroundImage:
          "url('assets/SVGs/DailySummaryBgBlob.svg'), linear-gradient(180deg, #2D507C, #4F7DB7)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150%',
        backgroundPosition: 'top',
        height: '700px',
        width: 1,
        boxSizing: 'border-box',
        p: 4,
      }}
    >
      <Stack sx={{ height: 1 }}>
        <Box
          sx={{ width: 1, display: 'flex', justifyContent: 'center', pb: 4 }}
        >
          <Box sx={{ width: '50%', color: '#1a3456' }}>
            <LinearProgress
              color="inherit"
              variant="determinate"
              value={(100 / 6) * 2}
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
        <Box sx={{ display: 'flex', alignItems: 'stretch', gap: 4, mb: 2 }}>
          <Box sx={{ width: '150px', flexShrink: 0 }}>
            <img
              src="assets/SVGs/Coach.svg"
              alt="coach"
              style={{ width: '100%' }}
            />
          </Box>
          <Box>
            <Typography fontWeight="bold" fontSize={24}>
              Now, let's gather some personal information
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Information such as your height, weight, and birthdate helps us
              estimate your average calorie expenditure. Combined with your
              goals, this data is essential for crafting your personalized diet
              plan.
            </Typography>
          </Box>
        </Box>
        <Container maxWidth="sm" sx={{ px: '0 !important', flex: 1, pb: 4 }}>
          <Stack sx={{ height: 1, justifyContent: 'space-around' }}>
            <Box>
              <Typography variant="body2" fontWeight="semi-bold">
                Height
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 4,
                }}
              >
                <Slider
                  aria-label="Height"
                  color="inherit"
                  min={0}
                  max={250}
                  value={userInfo.height}
                  onChange={(e, value) => updateUserInfo('height', value)}
                  sx={{ maxWidth: '65%' }}
                />

                <Box sx={{ flexShrink: 0 }}>
                  <Typography>
                    {userInfo.height || '---'} {userInfo.heightMeasurement}
                  </Typography>
                </Box>
                <ButtonGroup>
                  <Button
                    size="small"
                    sx={{
                      background:
                        userInfo.heightMeasurement === 'cm'
                          ? '#FFFFFFcc'
                          : '#FFF',
                      color: '#2D507C',
                    }}
                    onClick={() => updateUserInfo('heightMeasurement', 'cm')}
                  >
                    cm
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      background:
                        userInfo.heightMeasurement === 'in'
                          ? '#FFFFFFcc'
                          : '#FFF',
                      color: '#2D507C',
                    }}
                    onClick={() => updateUserInfo('heightMeasurement', 'in')}
                  >
                    in
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="semi-bold">
                Weight
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 4,
                }}
              >
                <Slider
                  aria-label="Weight"
                  color="inherit"
                  min={0}
                  max={250}
                  value={userInfo.weight}
                  onChange={(e, value) => updateUserInfo('weight', value)}
                  sx={{ maxWidth: '65%' }}
                />

                <Box sx={{ flexShrink: 0 }}>
                  <Typography>
                    {userInfo.weight || '---'} {userInfo.weightMeasurement}
                  </Typography>
                </Box>
                <ButtonGroup>
                  <Button
                    size="small"
                    sx={{
                      background:
                        userInfo.weightMeasurement === 'kg'
                          ? '#FFFFFFcc'
                          : '#FFF',
                      color: '#2D507C',
                    }}
                    onClick={() => updateUserInfo('weightMeasurement', 'kg')}
                  >
                    kg
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      background:
                        userInfo.weightMeasurement === 'lbs'
                          ? '#FFFFFFcc'
                          : '#FFF',
                      color: '#2D507C',
                    }}
                    onClick={() => updateUserInfo('weightMeasurement', 'lbs')}
                  >
                    lbs
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
            <Box>
              <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 1 }}>
                Birthdate
              </Typography>
              <DatePicker
                disableFuture
                format="YYYY-MM-DD"
                value={dayjs(userInfo.birthdate)}
                onChange={value =>
                  updateUserInfo('birthdate', dayjs(value).format('YYYY-MM-DD'))
                }
                onError={() => setIsInvalidDate(true)}
                onAccept={() => setIsInvalidDate(false)}
                size="small"
                sx={{
                  background: '#FFF',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              />
            </Box>
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
              disabled={
                userInfo.weight === null ||
                userInfo.height === null ||
                userInfo.birthdate === null ||
                isInvalidDate
              }
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

export default PersonalInformation;
