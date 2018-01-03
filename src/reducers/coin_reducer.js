function coinsReducer(state = {coins: [], currentCoin: "Empty", historicalPrice: null}, action){
  switch (action.type){
    case "FETCHED_COINS":
      return Object.assign({}, state, {coins: action.payload})
    case "VIEW_COIN":
      return Object.assign({}, state, {currentCoin: action.payload})
    case "HISTORICAL_DATA":
      return Object.assign({}, state, {historicalPrice: action.payload})
    default:
      return state;
  }
}

export default coinsReducer
