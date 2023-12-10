import { combineReducers } from '@reduxjs/toolkit';
import userReducer from "./reducers/user";
import ordersReducer from './reducers/orders'

const rootReducer = combineReducers({
  user: userReducer,
  orders: ordersReducer
});

export default rootReducer;
