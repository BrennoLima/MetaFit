import React from 'react';
import { Box, Container, Stack, Slider, Typography } from '@mui/material';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const LifestyleInformation = ({ userInfo, updateUserInfo }) => {
  return (
    <Container maxWidth="sm" sx={{ px: '0 !important', flex: 1 }}>
      <Stack sx={{ mt: 2, gap: 3 }}>
        <Box>
          <Typography variant="body2" fontWeight="semi-bold">
            Activity level
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
              marks
              aria-label="activityLevel"
              color="inherit"
              min={1}
              max={5}
              value={userInfo.activityLevel}
              onChange={(e, value) => updateUserInfo('activityLevel', value)}
              sx={{ maxWidth: '70%' }}
            />

            <Box sx={{ flexShrink: 0, flex: 1 }}>
              {userInfo.activityLevel === 1 && (
                <>
                  <Typography
                    fontWeight="medium"
                    fontSize={18}
                    textAlign="flex-start"
                  >
                    Sedentary
                  </Typography>
                  <Typography variant="caption">No weekly exercise</Typography>
                </>
              )}
              {userInfo.activityLevel === 2 && (
                <>
                  <Typography
                    fontWeight="medium"
                    fontSize={18}
                    textAlign="flex-start"
                  >
                    Light
                  </Typography>
                  <Typography variant="caption">2h exercise a week</Typography>
                </>
              )}
              {userInfo.activityLevel === 3 && (
                <>
                  <Typography
                    fontWeight="medium"
                    fontSize={18}
                    textAlign="flex-start"
                  >
                    Moderate
                  </Typography>
                  <Typography variant="caption">5h exercise a week</Typography>
                </>
              )}
              {userInfo.activityLevel === 4 && (
                <>
                  <Typography
                    fontWeight="medium"
                    fontSize={18}
                    textAlign="flex-start"
                  >
                    High
                  </Typography>
                  <Typography variant="caption">10h exercise a week</Typography>
                </>
              )}
              {userInfo.activityLevel === 5 && (
                <>
                  <Typography
                    fontWeight="medium"
                    fontSize={18}
                    textAlign="flex-start"
                  >
                    Athlete
                  </Typography>
                  <Typography variant="caption">
                    12h+ exercise a week
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 1 }}>
              Wake up time
            </Typography>
            <TimePicker
              value={dayjs(userInfo.wakeUpTime)}
              onChange={newValue => updateUserInfo('wakeUpTime', newValue)}
              sx={{
                background: '#FFF',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 1 }}>
              Sleep time
            </Typography>
            <TimePicker
              value={dayjs(userInfo.sleepTime)}
              onChange={newValue => updateUserInfo('sleepTime', newValue)}
              sx={{
                background: '#FFF',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            />
          </Box>
        </Box>
        <Box>
          <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 1 }}>
            Exercise time
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TimePicker
              value={dayjs(userInfo.exerciseStartTime)}
              onChange={newValue =>
                updateUserInfo('exerciseStartTime', newValue)
              }
              sx={{
                background: '#FFF',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            />
            <Typography>to</Typography>
            <TimePicker
              disabled={!userInfo.exerciseStartTime}
              minTime={dayjs(userInfo.exerciseStartTime)}
              value={dayjs(userInfo.exerciseEndTime)}
              onChange={newValue => updateUserInfo('exerciseEndTime', newValue)}
              sx={{
                background: '#FFF',
                borderRadius: 1,
                overflow: 'hidden',
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LifestyleInformation;
