import {combineReducers} from 'redux';
import sessionsReducer from './sessions_reducer';
import uiReducer from './ui_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionsReducer,
  ui: uiReducer,
  errors: errorsReducer
})