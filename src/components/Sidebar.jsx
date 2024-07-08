import React, { useState } from 'react';
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
  FaCalendarAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex flex-col h-full md:h-screen md:flex-row'>
      {/* Mobile Hamburger Menu */}
      <div className='md:hidden flex justify-between items-center p-4 bg-white text-gray-800'>
        <div className='text-2xl font-bold text-black'>Pipance</div>
        <button onClick={handleToggle} className='text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar for larger screens */}
      <div
        className={`w-64 h-full bg-white text-gray-800 flex flex-col fixed md:relative overflow-y-auto ${
          isOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className='p-4 text-2xl font-bold text-black hidden md:block'>
          Pipance
        </div>
        <nav className='flex-grow'>
          <ul className='space-y-0'>
            <li>
              <NavLink
                to='/dashboard'
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
                to='/map'
                className={({ isActive }) =>
                  `flex items-center block py-2.5 px-6 hover:bg-gray-100 ${
                    isActive
                      ? 'bg-color-primary text-white hover:text-black'
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

      {/* Bottom Navigation for mobile */}
      <div className='fixed bottom-0 left-0 right-0 md:hidden bg-white shadow-md'>
        <div className='flex justify-around p-2'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-green-700' : 'text-gray-800'
              }`
            }
          >
            <FaChartLine className='text-2xl' />
            <span className='text-xs'>Dashboard</span>
          </NavLink>
          <NavLink
            to='/recycle'
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-green-700' : 'text-gray-800'
              }`
            }
          >
            <FaRecycle className='text-2xl' />
            <span className='text-xs'>Recycle</span>
          </NavLink>
          <NavLink
            to='/market'
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-green-700' : 'text-gray-800'
              }`
            }
          >
            <FaShoppingCart className='text-2xl' />
            <span className='text-xs'>Market</span>
          </NavLink>
          <NavLink
            to='/earnings'
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-green-700' : 'text-gray-800'
              }`
            }
          >
            <FaMoneyBill className='text-2xl' />
            <span className='text-xs'>Earnings</span>
          </NavLink>
          <NavLink
            to='/map'
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 ${
                isActive ? 'text-green-700' : 'text-gray-800'
              }`
            }
          >
            <FaMapMarkerAlt className='text-2xl' />
            <span className='text-xs'>Map</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
