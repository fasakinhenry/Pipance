import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChartLine,
  FaRecycle,
  FaMoneyBill,
  FaTasks,
  FaShoppingCart,
  FaUserFriends,
  FaBook,
  FaUserCog,
  FaCog,
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex flex-col h-full md:h-screen md:flex-row'>
      {/* Mobile Hamburger Menu */}
      <div className='md:hidden flex justify-between items-center p-4 bg-white text-gray-800'>
        <div className='text-2xl font-bold text-black'>Pipance</div>
        <button
          onClick={handleToggle}
          className='p-2 rounded bg-color-primary text-white'
        >
          {isOpen ? (
            <FaTimes className='text-2xl' />
          ) : (
            <FaBars className='text-2xl' />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white text-gray-800 flex flex-col transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className='p-4 text-2xl font-bold text-black hidden md:block'>
          Pipance
        </div>
        <nav className='flex-grow'>
          <ul className='space-y-0'>
            <li>
              <NavLink
                to='/dashboard'
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                to='/guides'
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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
                onClick={handleClose}
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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

      {/* Overlay for mobile screens */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 md:hidden z-10'
          onClick={handleClose}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
