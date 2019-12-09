import * as constants from '../constants';

export default function (state = [], action) {
  switch (action.type) {
    case constants.INITIALIZE_CINEMAS: return action.payload;
    default: return state;
  }
}
