import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='w-64 h-full bg-gray-800 text-white flex flex-col'>
      <div className='p-4 text-2xl font-bold'>Pipance</div>
      <nav className='flex-grow'>
        <ul>
          <li>
            <NavLink
              to='/home'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/education'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/locator'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Locator
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/schedule'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Schedule Pick-up
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/rewards'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Rewards
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/messages'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile'
              className={({ isActive }) =>
                isActive ? 'bg-primary text-white' : 'text-gray-400'
              }
              activeClassName='bg-primary text-white'
              className='block py-2.5 px-4'
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='p-4'>
        <div className='text-gray-400'>User Profile</div>
        <div className='text-white'>John Doe</div>
      </div>
    </div>
  );
};

export default Sidebar;
