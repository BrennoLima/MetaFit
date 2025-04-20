import React from 'react';
import { Box, Button, Container } from '@mui/material';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

const GenderInformation = ({ userInfo, updateUserInfo }) => {
  return (
    <Container maxWidth="sm" sx={{ px: '0 !important', height: 1 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 1,
        }}
      >
        <Button
          variant="contained"
          startIcon={<ManIcon />}
          sx={{
            border:
              userInfo.gender === 'male'
                ? '1px solid #FFF'
                : '1px solid #2D507C',
            backgroundColor: '#2D507C',
            fontSize: 20,
            pr: 6,
            pl: 1,
            py: 4,
            '& .MuiSvgIcon-root': {
              fontSize: '100px !important',
            },
          }}
          onClick={() => updateUserInfo('gender', 'male')}
        >
          Male
        </Button>
        <Button
          variant="contained"
          startIcon={<WomanIcon />}
          sx={{
            border:
              userInfo.gender === 'female'
                ? '1px solid #FFF'
                : '1px solid #2D507C',
            backgroundColor: '#2D507C',
            fontSize: 20,
            pr: 4,
            pl: 1,
            py: 4,
            '& .MuiSvgIcon-root': {
              fontSize: '100px !important',
            },
          }}
          onClick={() => updateUserInfo('gender', 'female')}
        >
          Female
        </Button>
      </Box>
    </Container>
  );
};

export default GenderInformation;
