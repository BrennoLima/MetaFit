import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box, Container, Link } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonIcon from '@mui/icons-material/Person';

export const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Box
      sx={{
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        height: '50px',
        padding: '0 1rem',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
        <Link
          href={'/'}
          sx={{
            mr: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          <FitnessCenterIcon /> MetaFit
        </Link>
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button
              disabled
              component={Link}
              href="/profile"
              size="small"
              startIcon={<PersonIcon />}
            >
              Profile
            </Button>
            <Button
              component={Link}
              href="/my-timeline"
              size="small"
              startIcon={<TimelineIcon />}
            >
              My Timeline
            </Button>
            <Button
              size="small"
              startIcon={<LogoutIcon />}
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Button
            size="small"
            startIcon={<LoginIcon />}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
      </Container>
    </Box>
  );
};
