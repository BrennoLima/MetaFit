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

const MedicalInformation = ({ userInfo, updateUserInfo }) => {
  const conditionsList = [
    'Diabetes',
    'Hypertension',
    'Heart Disease',
    'Kidney Disease',
    'Liver Disease',
    'Celiac Disease',
    'Irritable Bowel Syndrome',
    'Thyroid Disorders',
    'Metabolic Syndrome',
    'Anemia',
    'Pregnancy',
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
    <Container
      maxWidth="sm"
      sx={{
        px: '0 !important',
      }}
    >
      <Stack>
        <Box>
          <Typography variant="body2" fontWeight="semi-bold" sx={{ mb: 2 }}>
            Select any medical condition that applies or simple skip
          </Typography>
          <Grid2 container gap={2}>
            {conditionsList.map(item => (
              <Button
                variant="contained"
                key={'medicalCondition' + item}
                sx={{
                  fontWeight: 'normal',
                  borderRadius: 10,
                  px: 4,
                  border: userInfo.medicalConditions.includes(item)
                    ? '1px solid #FFF'
                    : '1px solid #2D507C',
                  backgroundColor: '#2D507C',
                }}
                onClick={() =>
                  updateUserInfo(
                    'medicalConditions',
                    toggleItem(userInfo.medicalConditions, item)
                  )
                }
              >
                {item}
              </Button>
            ))}
          </Grid2>
          {userInfo.medicalConditions.includes('Other') && (
            <TextField
              fullWidth
              placeholder="Specify in a few words (other)"
              value={userInfo.medicalConditionsOther}
              onChange={e =>
                updateUserInfo('medicalConditionsOther', e.target.value)
              }
              size="small"
              sx={{ background: '#FFF', borderRadius: 1, mt: 2 }}
            />
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default MedicalInformation;
