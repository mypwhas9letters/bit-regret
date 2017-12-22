import { combineReducers } from 'redux';
import CoinReducer from './coin_reducer'

const rootReducer = combineReducers({
  coins: CoinReducer
});

export default rootReducer
