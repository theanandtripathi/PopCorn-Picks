import React from 'react';
import Lottie from 'lottie-react';
import noMoviesAnimation from '../../assets/NoMovies.json';

const NoMovies = ({text}) => (
  <div className="flex flex-col items-center justify-center w-full text-gray-500 ">
    <div className="w-2/3 sm:w-1/2 md:w-1/3 lg:w-2/4">
      <Lottie animationData={noMoviesAnimation} loop={true} />
    </div>
    <p className="mt-4 text-2xl font-semibold text-center">{text}</p>
  </div>
);

export default NoMovies;
