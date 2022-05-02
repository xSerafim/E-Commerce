import { TOTAL_PRICE } from '../Actions/totalPrice';

const INITIAL_STATE = [];

export default function totalPriceReducer(state = INITIAL_STATE, action) { // eslint-disable-line
  switch (action.type) {
    case TOTAL_PRICE:
      return action.payload;
    default:
      return state;
  }
}
