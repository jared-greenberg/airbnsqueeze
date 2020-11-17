import {combineReducers} from 'redux';
import sessionsReducer from './sessions_reducer';

export default combineReducers({
  session: sessionsReducer
})