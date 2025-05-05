import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import HomePage from './HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onLogin={handleLogin} />} />
      <Route
        path="/home"
        element={isAuthenticated ? <HomePage user={user} onLogout={handleLogout} /> : <LandingPage onLogin={handleLogin} />}
      />
    </Routes>
  );
}

export default App;
