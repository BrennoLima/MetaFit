import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import UserInformation from './components/InfoGathering/UserInformation';
import { LandingPage } from './components/Landing/LandingPage';
import DietTimeline from './components/Diet/DietTimeline';
import { Navbar } from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage';

export const AppContext = createContext();

function App() {
  const [appContext, setAppContext] = useState(
    JSON.parse(localStorage.getItem('appContext')) || {
      isAuthenticated: false,
      userInfo: null,
    }
  );

  const updateAppContext = (name, value) => {
    setAppContext(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Persist context between reloads
    localStorage.setItem('appContext', JSON.stringify(appContext));
  }, [appContext]);

  return (
    <Router>
      <AppContext.Provider value={{ appContext, updateAppContext }}>
        <Box sx={{ minHeight: '100vh', background: '#f7f7f7' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {appContext.isAuthenticated && (
              <>
                <Route path="/user-info" element={<UserInformation />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/my-timeline" element={<DietTimeline />} />
              </>
            )}
          </Routes>
        </Box>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
