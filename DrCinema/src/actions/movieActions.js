import * as constants from '../constants';

const initializeMovies = (movieArray) => ({
  type: constants.INITIALIZE_MOVIES,
  payload: movieArray,
});

export default initializeMovies;
