import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import itemReducer from './Reducer/itemReducer';
import totalPriceReducer from './Reducer/totalPriceReducer';

const reducer = combineReducers({
  items: itemReducer,
  totalPrice: totalPriceReducer,
});

const store = configureStore({
  reducer,
});

export default store;
