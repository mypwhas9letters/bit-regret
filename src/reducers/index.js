import { combineReducers } from 'redux';
import coinReducer from './coin_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  coinReducer,
  formReducer
});

export default rootReducer
