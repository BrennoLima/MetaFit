import React from 'react';
import { Box, Container, Link } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };
  // eslint-disable-next-line
  const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    );
  };

  return (
    <Box
      sx={{
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        height: '50px',
        background: '#ffffff1a',
        padding: '0 1rem',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
        <Link href={'/'}>
          <FitnessCenterIcon />
        </Link>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Container>
    </Box>
  );
};
