import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Cinema from '../views/Cinema';
import Cinemas from '../views/Cinemas';
import Movie from '../views/Movie';
import UpcomingMovies from '../views/UpcomingMovies';

export default createAppContainer(createStackNavigator({
  Cinemas,
  Cinema,
  Movie,
  UpcomingMovies,
}));
