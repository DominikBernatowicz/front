import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['orders'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  middleware: customizedMiddleware
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export const persistor = persistStore(store)

export default store

