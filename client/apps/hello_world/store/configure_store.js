import configureStore from 'atomic-fuel/libs/store/configure_store';
import rootReducer from '../reducers/index';
import API from '../middleware/api';
import applyMiddleware from 'redux';
import thunk from 'redux-thunk';

const middleware = [API, thunk];

// This file just exports the default configure store. If modifications are needed
// make the modifications in this file by extending the configureStore
// or copy pasting the code into this file.
export default function(initialState) {
  return configureStore(initialState, rootReducer, middleware);
}
