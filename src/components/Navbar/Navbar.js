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
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import TimelineIcon from '@mui/icons-material/Timeline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAuth0 } from '@auth0/auth0-react';
import useIsMobileScreen from '../../utils/useIsMobileScreen';

export const Navbar = () => {
  const isMobile = useIsMobileScreen();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        boxShadow: '0px 2px 10px rgba(0,0,0,0.2)',
        height: '50px',
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
          <img
            src="assets/SVGs/MetaFitDark.svg"
            alt="MetaFit"
            style={{ width: '100%', height: '32px' }}
          />
        </Link>
        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <>
                <Button
                  component={Link}
                  href="/home"
                  size="small"
                  startIcon={<HomeOutlinedIcon />}
                  sx={{ px: 2 }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  href="/my-timeline"
                  size="small"
                  startIcon={<TimelineIcon />}
                  sx={{ px: 2 }}
                >
                  My Timeline
                </Button>
              </>
            )}
            <IconButton
              onClick={e => setAnchorEl(e.currentTarget)}
              size="small"
              aria-controls={open ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
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
              <MenuItem
                component={Link}
                href="/my-timeline"
                onClick={handleClose}
                sx={{ minWidth: '150px' }}
              >
                <ListItemIcon>
                  <TimelineIcon />
                </ListItemIcon>
                <Typography>Timeline</Typography>
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
          <Button
            size="small"
            startIcon={<LoginIcon size="small" />}
            onClick={loginWithRedirect}
          >
            Login
          </Button>
        )}
      </Container>
    </Box>
  );
};
