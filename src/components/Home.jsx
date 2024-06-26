import React from 'react';

const Home = () => {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-primary mb-4'>
        Welcome to Pipance!
      </h1>
      <p className='text-gray-700 mb-6'>
        Pipance is your go-to app for all things recycling. Easily connect with
        nearby recycling centers, schedule pickups, and get rewarded for your
        eco-friendly efforts.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='p-4 bg-white rounded shadow'>
          <h2 className='text-xl font-semibold text-primary mb-2'>
            Recent Activity
          </h2>
          <ul className='text-gray-700'>
            <li>✓ Scheduled a pickup for plastic bottles</li>
            <li>✓ Located a nearby recycling center</li>
            <li>✓ Earned 50 points for recycling</li>
          </ul>
        </div>
        <div className='p-4 bg-white rounded shadow'>
          <h2 className='text-xl font-semibold text-primary mb-2'>
            Tips for Effective Recycling
          </h2>
          <ul className='text-gray-700'>
            <li>✔ Clean your recyclables before disposal</li>
            <li>✔ Separate different types of materials</li>
            <li>✔ Flatten cardboard boxes</li>
          </ul>
        </div>
        <div className='p-4 bg-white rounded shadow'>
          <h2 className='text-xl font-semibold text-primary mb-2'>
            Upcoming Events
          </h2>
          <ul className='text-gray-700'>
            <li>🔔 Recycling workshop - June 30th</li>
            <li>🔔 Community clean-up - July 15th</li>
            <li>🔔 Eco-friendly product fair - August 10th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
