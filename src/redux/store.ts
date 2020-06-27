import { combineReducers, createStore, applyMiddleware } from 'redux';
import userEventReducer from './user-event';
import recorderReducer from './recorder';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  userEvent: userEventReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
