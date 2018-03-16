import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { asyncCountReducer } from '../pages/Count/reducers';

/* eslint-disable no-underscore-dangle, no-undef */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  asyncCountReducer,
});

const configureStore = () => createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default configureStore;
