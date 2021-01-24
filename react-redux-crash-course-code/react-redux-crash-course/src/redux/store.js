import { combineReducers, createStore,applyMiddleware,compose } from "redux";
import laptopReducer from './reducers/laptopReducer';
import mobileReducer from './reducers/mobileReducer';
import usersReducer from './reducers/usersReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  users: usersReducer
})
const store = createStore(rootReducer,compose(
  applyMiddleware(thunk,logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ));
export default store;