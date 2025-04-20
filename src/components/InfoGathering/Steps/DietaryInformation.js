import React from 'react';
import {
  Box,
  Button,
  Container,
  Stack,
  Grid2,
  Typography,
  TextField,
} from '@mui/material';

const DietaryInformation = ({ userInfo, updateUserInfo }) => {
  const allergiesList = [
    'Peanuts',
    'Milk',
    'Eggs',
    'Wheat',
    'Soy',
    'Fish',
    'Shellfish',
    'Sesame',
    'Other',
  ];
  const dietPreferencesList = [
    'Vegetarian',
    'Vegan',
    'Dairy-free',
    'Gluten-free',
    'Other',
  ];

  const toggleItem = (list, item) => {
    if (list.includes(item)) {
      console.log(list.filter(i => item !== i));
      return list.filter(listItem => listItem !== item);
    } else {
      return [...list, item];
    }
  };

  return (
    <Container maxWidth="sm" sx={{ px: '0 !important' }}>
      <Stack sx={{ gap: 3 }}>
        <Box>
          <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 2 }}>
            Allergies or intolerance? Select bellow
          </Typography>
          <Grid2 container gap={1}>
            {allergiesList.map(item => (
              <Button
                variant="contained"
                key={'allergy' + item}
                sx={{
                  fontWeight: 'normal',
                  borderRadius: 10,
                  px: 4,
                  border: userInfo.allergies.includes(item)
                    ? '1px solid #FFF'
                    : '1px solid #2D507C',
                  backgroundColor: '#2D507C',
                }}
                onClick={() =>
                  updateUserInfo(
                    'allergies',
                    toggleItem(userInfo.allergies, item)
                  )
                }
              >
                {item}
              </Button>
            ))}
          </Grid2>
          {userInfo.allergies.includes('Other') && (
            <TextField
              fullWidth
              placeholder="Specify in a few words (other)"
              value={userInfo.allergiesOther}
              onChange={e => updateUserInfo('allergiesOther', e.target.value)}
              size="small"
              sx={{ background: '#FFF', borderRadius: 1, mt: 2 }}
            />
          )}
        </Box>
        <Box>
          <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 2 }}>
            Diet preferences?
          </Typography>
          <Grid2 container gap={1}>
            {dietPreferencesList.map(item => (
              <Button
                key={'preference' + item}
                variant="contained"
                sx={{
                  fontWeight: 'normal',
                  borderRadius: 10,
                  px: 4,
                  border: userInfo.dietPreferences.includes(item)
                    ? '1px solid #FFF'
                    : '1px solid #2D507C',
                  backgroundColor: '#2D507C',
                }}
                onClick={() =>
                  updateUserInfo(
                    'dietPreferences',
                    toggleItem(userInfo.dietPreferences, item)
                  )
                }
              >
                {item}
              </Button>
            ))}
          </Grid2>
          {userInfo.dietPreferences.includes('Other') && (
            <TextField
              fullWidth
              placeholder="Specify in a few words (other)"
              value={userInfo.dietPreferencesOther}
              onChange={e =>
                updateUserInfo('dietPreferencesOther', e.target.value)
              }
              size="small"
              sx={{ background: '#FFF', borderRadius: 1, mt: 3 }}
            />
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default DietaryInformation;
