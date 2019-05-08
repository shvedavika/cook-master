import {combineReducers} from 'redux';
import event from './eventReducer';
import filter from './filterReducer';
import menu from './menuReducer';

export default combineReducers({
  event,
  filter,
  menu,
});


