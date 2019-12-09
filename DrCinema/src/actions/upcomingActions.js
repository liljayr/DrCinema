import * as constants from '../constants';

const initializeUpcoming = (upcomingArray) => ({
  type: constants.INITIALIZE_UPCOMING_MOVIES,
  payload: upcomingArray,
});

export default initializeUpcoming;
