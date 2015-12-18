import { combineReducers } from 'redux';
import { default as animation } from './animation';
import { default as sequence } from './sequence';


const rootReducer = combineReducers({
  animation,
  sequence
});

export default rootReducer;
