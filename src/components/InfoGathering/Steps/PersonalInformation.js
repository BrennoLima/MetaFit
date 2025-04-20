import React from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  Slider,
  Typography,
  ButtonGroup,
} from '@mui/material';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PersonalInformation = ({ userInfo, updateUserInfo }) => {
  return (
    <Container maxWidth="sm" sx={{ px: '0 !important', flex: 1 }}>
      <Stack sx={{ mt: 2, gap: 4 }}>
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
                    userInfo.heightMeasurement === 'cm' ? '#FFFFFFcc' : '#FFF',
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
                    userInfo.heightMeasurement === 'in' ? '#FFFFFFcc' : '#FFF',
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
                    userInfo.weightMeasurement === 'kg' ? '#FFFFFFcc' : '#FFF',
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
                    userInfo.weightMeasurement === 'lbs' ? '#FFFFFFcc' : '#FFF',
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
  );
};

export default PersonalInformation;
