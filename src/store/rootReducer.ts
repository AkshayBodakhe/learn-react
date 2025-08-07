import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default rootReducer; 