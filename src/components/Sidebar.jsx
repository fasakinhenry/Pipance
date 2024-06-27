import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChartLine,
  FaRecycle,
  FaMoneyBill,
  FaTasks,
  FaShoppingCart,
  FaUserFriends,
  FaMapMarkerAlt,
  FaBook,
  FaUserCog,
  FaCog,
  FaCalendarAlt, // New icon for Schedule
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className='w-64 h-full bg-white text-gray-800 flex flex-col'>
      <div className='p-4 text-2xl font-bold text-black'>Pipance</div>
      <nav className='flex-grow'>
        <ul className='space-y-0'>
          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaChartLine className='mr-2' />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/recycle'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaRecycle className='mr-2' />
              Recycle
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/earnings'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaMoneyBill className='mr-2' />
              Earnings
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/tasks'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaTasks className='mr-2' />
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/market'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaShoppingCart className='mr-2' />
              Market
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/connect'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaUserFriends className='mr-2' />
              Connect
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/map'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaMapMarkerAlt className='mr-2' />
              Map
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/guides'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaBook className='mr-2' />
              Guides
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/schedule'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaCalendarAlt className='mr-2' />
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaUserCog className='mr-2' />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/settings'
              className={({ isActive }) =>
                `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                  isActive
                    ? 'bg-green-700 text-white hover:text-black'
                    : 'text-black'
                }`
              }
            >
              <FaCog className='mr-2' />
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='p-4 flex items-center'>
        <img
          src='https://via.placeholder.com/40'
          alt='Profile'
          className='w-10 h-10 rounded-full mr-3'
        />
        <div>
          <div className='text-gray-800 font-semibold'>John Doe</div>
          <div className='text-gray-400 text-sm'>john.doe@example.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
