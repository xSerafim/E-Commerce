import { SAVE_ITEM } from '../Actions/saveItem';

const INITIAL_STATE = [];

export default function itemReducer(state = INITIAL_STATE, action) { // eslint-disable-line
  switch (action.type) {
    case SAVE_ITEM:
      return [...action.payload];
    default:
      return state;
  }
}
