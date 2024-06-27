import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Recycle from "./pages/Recycle";
import Earnings from "./pages/Earnings";
import Tasks from "./pages/Tasks";
import Market from "./pages/Market";
import Connect from "./pages/Connect";
import Map from "./pages/Map";
import Guides from "./pages/Guides";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => (
  <Router>
    <Routes>
      {/* Landing page Layout */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Signin and Signup page layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Route>

      {/* Main application or dashboard layout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recycle" element={<Recycle />} />
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/market" element={<Market />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/map" element={<Map />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
