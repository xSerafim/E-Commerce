import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import itemReducer from './Reducer/itemReducer';

const reducer = combineReducers({
  items: itemReducer,
});

const store = configureStore({
  reducer,
});

export default store;
