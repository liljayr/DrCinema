import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.INITIALIZE_MOVIES: return action.payload;
    case constants.GET_ALL_MOVIES: return state;
    default: return state;
  }
}
