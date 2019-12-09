import * as constants from '../constants';

const initializeCinemas = (cinemaArray) => ({
  type: constants.INITIALIZE_CINEMAS,
  payload: cinemaArray,
});

export default initializeCinemas;
