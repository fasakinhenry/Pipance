import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import components for the landing page
import LandingLayout from './layouts/LandingLayout';
import LandingPage from './pages/LandingPage';
// Import components for the signin and signup page
import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// Import components for the main app
import AppLayout from './layouts/AppLayout';
import Dashboard from './components/Dashboard';
import Recycle from './components/Recycle';
import Earnings from './components/Earnings';
import Tasks from './components/Tasks';
import Market from './components/Market';
import Connect from './components/Connect';
import Map from './components/Map';
import Guides from './components/Guides';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Schedule from './components/Schedule';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page Layout */}
      <Route path='/' element={<LandingLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Signin and Signup page layout */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>

      {/* Main application or dashboard layout */}
      <Route element={<AppLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/recycle' element={<Recycle />} />
        <Route path='/earnings' element={<Earnings />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/market' element={<Market />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/map' element={<Map />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
