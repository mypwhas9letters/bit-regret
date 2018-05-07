function coinsReducer(state = {coins: null, currentCoin: "Empty", historicalPrice: null}, action){
  switch (action.type){
    case "FETCHED_COINS":
      const sorted = Object.values(action.payload.data).sort((a,b)=>a.rank - b.rank)
      return Object.assign({}, state, {coins: sorted})
    case "VIEW_COIN":
      return Object.assign({}, state, {currentCoin: action.payload})
    case "HISTORICAL_DATA":
      return Object.assign({}, state, {historicalPrice: action.payload})
    case "CLEAR_HISTORICAL_DATA":
      return Object.assign({}, state, {historicalPrice: null})
    default:
      return state;
  }
}

export default coinsReducer
