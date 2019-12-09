import * as constants from '../constants';

export const initializeMovies = (movieArray) => ({
  type: constants.INITIALIZE_MOVIES,
  payload: movieArray,
});
