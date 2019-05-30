import fetchUsersReducers from './reducers/FetchUsersReducers';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const logger = new createLogger();
export default createStore(
  fetchUsersReducers, applyMiddleware(logger, promise())
);
