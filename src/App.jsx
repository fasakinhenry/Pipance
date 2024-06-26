import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Features from "./pages/Functions";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Home from './components/Home';
import Education from './components/Education';
import Locator from './components/Locator';
import Schedule from './components/Schedule';
import Rewards from './components/Rewards';
import Messages from './components/Messages';
import Profile from './components/Profile';

const App = () => (
  <Router>
    <Routes>
      {/* Landing page Layout */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="functions" element={<Features />} />
      </Route>
      {/* Signin and Signup page layout */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
      {/* Main application or dashboard layout */}
      <Route element={<AppLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="locator" element={<Locator />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="rewards" element={<Rewards />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
