import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

import {
  Box,
  Button,
  Container,
  IconButton,
  TextField,
  Stack,
  Typography,
} from '@mui/material';

export const Footer = () => {
  return (
    <Container
      sx={{
        width: 1,
        pt: '5vh',
        pb: 1,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: ['column', 'row'] }}>
        <Stack
          sx={{ width: ['100%', '50%'], alignItems: 'flex-start', gap: 4 }}
        >
          <Box sx={{ height: ['40px', '80px'] }}>
            <img
              src="assets/SVGs/MetaFitDark.svg"
              alt="MetaFit"
              style={{ height: '100%' }}
            />
          </Box>

          <Box
            sx={{ display: 'flex', width: [1, 2 / 3], alignItems: 'center' }}
          >
            <TextField
              color="primary"
              size="small"
              label="Join our email letter!"
              variant="outlined"
              sx={{
                my: 2,
                width: 1,
              }}
            />
            <Button disabled size="small" sx={{ py: 1 }}>
              Sign
            </Button>
          </Box>
        </Stack>
        <Box sx={{ width: ['100%', '50%'], pt: 2 }}>
          <Box
            sx={{
              width: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <XIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Button size="small">Login</Button>
          </Box>
          <Box
            sx={{
              width: 1,
              display: 'flex',
              justifyContent: 'space-between',
              mt: 4,
            }}
          >
            <Button size="small">About us</Button>
            <Button size="small">Features</Button>
          </Box>
          <Box
            sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}
          >
            <Button size="small">Terms and conditions</Button>
            <Button size="small">Pricing</Button>
          </Box>
          <Box
            sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}
          >
            <Button size="small">Privacy Policy</Button>
            <Button size="small">FAQ</Button>
          </Box>
          <Box
            sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}
          >
            <Button size="small">Contact us</Button>
            <Button size="small">Blog</Button>
          </Box>
        </Box>
      </Box>
      <Typography color="primary" fontSize={14} sx={{ opacity: 0.75, mt: 2 }}>
        Copyright © MetaFit 2024 ∙ All rights reserved
      </Typography>
    </Container>
  );
};
