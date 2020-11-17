import {combineReducers} from 'redux';
import sessionsReducer from './sessions_reducer';
import uiReducer from './ui_reducer'

export default combineReducers({
  session: sessionsReducer,
  ui: uiReducer
})