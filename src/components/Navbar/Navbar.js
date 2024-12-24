import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuth0 } from '@auth0/auth0-react';
import useIsMobileScreen from '../../utils/useIsMobileScreen';
import useScrollPosition from '../../utils/useScrollPosition';

export const Navbar = () => {
  const isMobile = useIsMobileScreen();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const scrollPosition = useScrollPosition();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const isLargeNav = !isMobile && scrollPosition === 0;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        height: isLargeNav ? '120px' : '50px',
        transition: 'all 0.25s ease-in',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: isLargeNav ? '120px' : '50px',
          transition: 'all 0.25s ease-in',
        }}
      >
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
          <img
            src="assets/SVGs/MetaFitDark.svg"
            alt="MetaFit"
            style={{
              width: '100%',
              height: isLargeNav ? '80px' : '38px',
              transition: 'all 0.25s ease-in',
            }}
          />
        </Link>
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Button
                component={Link}
                href="/home"
                size={isLargeNav ? 'large' : 'small'}
                sx={{ px: 2, fontWeight: 500, transition: 'all 0.25s ease-in' }}
              >
                Home
              </Button>
            )}
            <IconButton
              onClick={e => setAnchorEl(e.currentTarget)}
              size={isLargeNav ? 'large' : 'small'}
              aria-controls={open ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar
                sx={{
                  width: isLargeNav ? 40 : 32,
                  height: isLargeNav ? 40 : 32,
                }}
              >
                B
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="user-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose} sx={{ minWidth: '150px' }}>
                <Avatar sx={{ width: 26, height: 26, mr: '10px' }}>B</Avatar>
                <Typography>Profile</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                href="/home"
                onClick={handleClose}
                sx={{ minWidth: '150px' }}
              >
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <Typography>Home</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SettingsIcon size="small" />
                </ListItemIcon>
                <Typography>Settings</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  logout({
                    logoutParams: { returnTo: window.location.origin },
                  });
                  handleClose();
                }}
              >
                <ListItemIcon>
                  <LogoutIcon size="small" />
                </ListItemIcon>
                <Typography>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box
            sx={{
              width: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                ml: 'auto',
                mr: 'auto',
                display: 'flex',
                gap: isMobile ? 2 : 4,
              }}
            >
              <Button
                size={isLargeNav ? 'large' : 'small'}
                onClick={loginWithRedirect}
                sx={{ fontWeight: 500, transition: 'all 0.25s ease-in' }}
              >
                Features
              </Button>
              <Button
                size={isLargeNav ? 'large' : 'small'}
                onClick={loginWithRedirect}
                sx={{ fontWeight: 500, transition: 'all 0.25s ease-in' }}
              >
                About
              </Button>
            </Box>

            <Button
              size={isLargeNav ? 'large' : 'small'}
              onClick={loginWithRedirect}
              sx={{ fontWeight: 500, transition: 'all 0.25s ease-in' }}
            >
              Login
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};
