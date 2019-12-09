import { combineReducers } from 'redux';
import movies from './movieReducers';
import cinemas from './cinemaReducers';
import upcoming from './upcomingReducer';

export default combineReducers({
  movies,
  cinemas,
  upcoming,
});
