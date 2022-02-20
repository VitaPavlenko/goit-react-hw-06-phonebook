import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import contactsReducer from '../redux/redux';
import TYPES from './types';
// import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import redux from './redux';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
