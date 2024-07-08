import React from 'react';
import landingImage from '../assets/landing.png';
import '../index.css';

const LandingPage = () => (
  <div className='relative text-center py-10 flex flex-col items-center w-full h-[100vh] overflow-x-hidden m-0 mt-5'>
    <div className='w-full h-full sliding-background mt-[8rem]'></div>
    <p className='absolute top-13 text-gray-700 bg-gray-200 w-fit p-3 rounded-full'>
      Health and safety is just a dream if you don’t recycle
    </p>
    <div className='absolute top-20 mt-10'>
      <h1 className='text-6xl font-black mt-10'>
        Turn <span className='text-blue-600'>Waste</span> into Worth with
        Pipance
      </h1>
    </div>
  </div>
);

export default LandingPage;
