import { combineReducers, createStore } from 'redux';
import userEventReducer from './user-event';
import recorderReducer from './recorder';

const rootReducer = combineReducers({
  userEvent: userEventReducer,
  recorder: recorderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;
