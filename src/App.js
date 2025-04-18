import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import UserInformation from './components/InfoGathering/UserInformation';
import { LandingPage } from './components/Landing/LandingPage';
import DietTimeline from './components/Diet/DietTimeline';
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';

function App() {
  const isAuthenticated = false;

  return (
    <Router>
      <Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {isAuthenticated && (
            <>
              <Route path="/user-info" element={<UserInformation />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/my-timeline" element={<DietTimeline />} />
            </>
          )}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
