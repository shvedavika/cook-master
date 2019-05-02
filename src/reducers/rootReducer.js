import {combineReducers} from 'redux';
import event from './eventReducer';
import filter from './filterReducer';

export default combineReducers({
  event,
  filter,
});


