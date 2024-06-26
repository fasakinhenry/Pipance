import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
