import { combineReducers } from 'redux';
import CoinReducer from './coin_reducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  coins: CoinReducer,
  form: formReducer
});

export default rootReducer
