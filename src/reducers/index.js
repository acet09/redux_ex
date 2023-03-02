import { combineReducers } from 'redux';
import todo from './todoReducer';
import setVisible from './visibleReducer';

const todoApp = combineReducers(
  {
    todo: todo,
    visivle: setVisible,
  }
)

export default todoApp